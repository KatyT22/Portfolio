import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  /** 🪶 Titre principal du site */
  title = 'Katy Tcha-Tokey — UX/UI';

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    // 🔗 Enregistrement des logos SVG
    this.registerLogos();
  }

  private registerLogos(): void {
    const logos = [
      'angular',
      'figma',
      'typescript',
      'docker',
      'wordpress',
      'spring',
      'unity',
      'github',
      'postgresql',
      'nodejs',
      'ansible',
      'jenkins',
      'confluence',
      'redmine',
      'git',
      'scss',
      'aws',
      'spss',
      'balsamiq',
      'java',
      'actionscript',
      'flex',
      'writing',
      'office',
      'research',
      'usertesting',
      'javascript',
      'crm',
      'ux',
      'communication',
      'sales',
      'csharp',
      'business',
      'vr',
      'serverless',
      'graphql',
      'material',

    ];

    logos.forEach(name => {
      this.iconRegistry.addSvgIcon(
        name,
        this.sanitizer.bypassSecurityTrustResourceUrl(`assets/logos/${name}.svg`)
      );
    });
  }
}