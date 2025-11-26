import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

declare const grecaptcha: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form!: FormGroup;

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  // Pour reCAPTCHA v3 ou autre (optionnel pour l’instant)
  captchaToken: string | null = null;
  recaptchaSiteKey = environment.recaptchaSiteKey;


  // à adapter si tu réutilises le composant sur un autre site
  private readonly siteKey = 'katysportfolio';
  private readonly formKey = 'contact';
  private readonly apiBaseUrl = environment.apiBaseUrl // ex: "https://xxxx.execute-api.eu-west-3.amazonaws.com"

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
      botField: [''] // honeypot invisible
    });
  }

  // À brancher dans le template si tu utilises reCAPTCHA (ng-recaptcha, Turnstile, etc.)
  // <re-captcha (resolved)="onCaptchaResolved($event)" ...></re-captcha>
  onCaptchaResolved(token: string | null): void {
    this.captchaToken = token;
  }

  submit(): void {
    if (this.form.invalid || this.isSubmitting) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    // On demande d'abord un token reCAPTCHA v3 à Google
    grecaptcha.ready(() => {
      grecaptcha.execute(this.recaptchaSiteKey, { action: 'contact' })
        .then((token: string) => {
          this.captchaToken = token;
          this.sendForm(); // on envoie le formulaire après avoir le token
        })
        .catch((err: any) => {
          console.error('Erreur reCAPTCHA', err);
          this.submitError = true;
          this.isSubmitting = false;
        });
    });
  }

  private sendForm(): void {
    const { name, email, message, botField } = this.form.value;

    const payload = {
      data: {
        name,
        email,
        message,
        botField: botField ?? ''
      },
      captchaToken: this.captchaToken
    };

    const url = `${this.apiBaseUrl}/form/${this.siteKey}/${this.formKey}`;

    this.http.post(url, payload).subscribe({
      next: () => {
        this.submitSuccess = true;
        this.form.reset();
        this.captchaToken = null;
        this.isSubmitting = false;
      },
      error: (err) => {
        console.error('Erreur envoi formulaire', err);
        this.submitError = true;
        this.isSubmitting = false;
      }
    });
  }
}