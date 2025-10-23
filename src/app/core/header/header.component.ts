import { Component, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  type?: 'link' | 'button';
  color?: string;
}

interface ToolbarAction {
  icon: string;
  aria: string;
  click?: () => void;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = 'Katy Tcha-Tokey — UX/UI';
  darkTheme = signal(false);

  /** 📱 Référence au menu latéral mobile (facultatif) */
  @ViewChild('drawer') drawer?: MatSidenav;

  /** 🧭 Menu principal */
  navItems: NavItem[] = [
    { label: 'Accueil', icon: 'home', route: '/home', type: 'link' },
    { label: 'Parcours', icon: 'work', route: '/experience', type: 'link' },
    { label: 'Projets', icon: 'collections', route: '/projects', type: 'link' },
    { label: 'Compétences', icon: 'bolt', route: '/skills', type: 'link' },
    {
      label: 'Contact',
      icon: 'mail',
      route: '/contact',
      type: 'button',
      color: 'tertiary',
    },
  ];

  /** 🎛️ Actions de la toolbar */
  toolbarActions: ToolbarAction[] = [
    {
      icon: 'dark_mode',
      aria: 'Basculer le thème',
      click: () => this.toggleTheme(),
    },
  ];

  /** 🌗 Basculer thème clair/sombre */
  toggleTheme() {
    this.darkTheme.update((v) => !v);
    document.body.classList.toggle('dark-theme', this.darkTheme());
  }
}
