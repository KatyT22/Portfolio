import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

interface FooterLink {
  label: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule, 
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  title = 'Katy Tcha-Tokey — UX/UI';
  currentYear = new Date().getFullYear();

  footerLinks: FooterLink[] = [
    {
      label: 'Research',
      url: 'https://vxmo.wordpress.com/recherche/',
      icon: 'wordpress',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/KatyT22',
      icon: 'github',
    },
  ];
}
