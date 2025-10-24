import { Component, Inject, PLATFORM_ID, AfterViewInit, OnInit } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Tool } from '../../core/models/tool.model';
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip as ChartTooltip,
  Legend
} from 'chart.js';
import { SkillsService } from '../../services/skills.service';

Chart.register(
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ChartTooltip,
  Legend
);



interface ProjectPreview {
  id: string;
  title: string;
  description: string;
  image: string;
  route: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  icon: string;
  label: string;
  value: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private skillsService: SkillsService) {}

  /** 🧭 1️⃣ Section Hero */
  hero = {
    title: 'Katy Tcha-Tokey',
    subtitle: 'Designer / Chercheuse UX/UI / Développeuse Fullstack',
    tagline:
      'Je conçois des interfaces simples, utiles et élégantes, guidées par la recherche et centrées sur l’humain.',
    ctaPrimary: { label: 'Voir mes maquettes', icon: 'collections', route: '#gallery' },
    ctaSecondary: { label: 'Me contacter', icon: 'mail', route: '/contact' },
    image: 'assets/img/avatar.png',
  };

  /** 👩‍💻 2️⃣ À propos / Profil */
  about = {
    title: 'À propos de moi',
    text: `J’aborde chaque projet comme une exploration : comprendre, tester, affiner.
Grâce à une approche centrée sur l’humain, je conçois des interfaces intuitives et inclusives, où la recherche et la co-création guident chaque décision.`,
    button: { label: 'Découvrir mon parcours', route: '/experience' },
  };

 

  /** ✅ Radar Chart — exécuté seulement dans le navigateur */
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const canvas = document.getElementById('skillsRadar') as HTMLCanvasElement | null;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      new Chart(ctx, {
        type: 'radar',
        data: {
          // 🧩 chaque label devient un tableau de 2 lignes
          labels: this.skillsService.skills.map((s) => {
            const words = s.label.split(' ');
            const mid = Math.ceil(words.length / 2);
            return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
          }),

          datasets: [
            {
              label: 'Compétences',
              data: this.skillsService.skills.map((s) => s.value),
              fill: true,
              backgroundColor: 'rgba(0,0,0,0)',
              borderColor: getComputedStyle(document.documentElement)
                .getPropertyValue('--mat-sys-primary')
                .trim(),
              pointBackgroundColor: getComputedStyle(document.documentElement)
                .getPropertyValue('--mat-sys-primary')
                .trim(),
              borderWidth: 2,
              tension: 0, // ✅ lignes droites
            },
          ],
        },

        options: {
          responsive: true, // ✅ s’adapte à la taille du conteneur
          maintainAspectRatio: false, // ✅ ignore le ratio fixe de Chart.js

          scales: {
            r: {
              min: 0,
              max: 100,
              ticks: {
                display: false, // ✅ cache les graduations
              },
              grid: { display: false },
              angleLines: {
                color: 'color-mix(in oklab, var(--mat-sys-outline-variant) 25%, transparent)',
              },
              pointLabels: {
                color: 'var(--mat-sys-on-surface)',
                font: {
                  size: parseFloat(
                    getComputedStyle(document.documentElement)
                      .getPropertyValue('--chart-font-size') || '13'
                  ),
                  weight: 'normal',
                },
                padding: 0,
              },
            },
          },

          plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
          },
        },
      }
    );
  }
}


  /** 🧩 4️⃣ Projets récents */
  projects: ProjectPreview[] = [
    {
      id: 'mannawa',
      title: 'Mannawa — Plateforme de livraison de produits exotiques',
      description:
        'Application mobile et site vitrine pour la livraison de produits culinaires afro, asiatiques et exotiques. UX/UI design, Angular et identité visuelle.',
      image: 'assets/img/mannawa-landing.png',
      route: '/projects',
    },
    {
      id: 'airbus-ui',
      title: 'UI interne — Airbus (Capgemini)',
      description:
        'Développement de composants Angular Material cohérents avec la charte UX interne et travail en équipe agile.',
      image: 'assets/img/airbus-ui.png',
      route: '/projects',
    },
    {
      id: 'vr-diagnostic',
      title: 'VR — Diagnostic psychologique',
      description:
        'Prototype de réalité virtuelle pour l’étude des fonctions exécutives et les tests UX en environnement immersif.',
      image: 'assets/img/vr-diagnostic.png',
      route: '/projects',
    },
  ];

  /** 🧰 5️⃣ Outils */
  tools: Tool[] = [
    { name: 'Figma', logo: 'figma', tooltip: 'Conception de maquettes & prototypes interactifs' },
    { name: 'Angular', logo: 'angular', tooltip: 'Framework front-end TypeScript pour applications web' },
    { name: 'TypeScript', logo: 'typescript', tooltip: 'Langage typé pour applications robustes et maintenables' },
    { name: 'HTML5 / SCSS', logo: 'scss', tooltip: 'Structure & stylisation responsive des interfaces' },
    { name: 'WordPress', logo: 'wordpress', tooltip: 'CMS pour sites dynamiques & e-commerce' },
    { name: 'Java / Spring', logo: 'spring', tooltip: 'Développement back-end orienté API & performance' },
    { name: 'SQL / PL-SQL', logo: 'postgresql', tooltip: 'Gestion des données et scripts de base de données' },
    { name: 'Node.js', logo: 'nodejs', tooltip: 'Scripts serveurs légers & automatisations back-end' },
    { name: 'Docker', logo: 'docker', tooltip: 'Conteneurisation et tests en environnement isolé' },
    { name: 'AWS', logo: 'aws', tooltip: 'Déploiement cloud (Serverless, CloudFormation)' },
    { name: 'Jenkins', logo: 'jenkins', tooltip: 'Intégration et déploiement continus (CI/CD)' },
    { name: 'GitHub', logo: 'github', tooltip: 'Versionning, gestion de code & collaboration' },
    { name: 'Ansible', logo: 'ansible', tooltip: 'Automatisation et orchestration d’environnements' },
    { name: 'Unity 3D', logo: 'unity', tooltip: 'Conception d’environnements immersifs en VR' },
    { name: 'SPSS / JASP', logo: 'spss', tooltip: 'Analyse statistique de données expérimentales' },
    { name: 'Confluence', logo: 'confluence', tooltip: 'Documentation technique & partage de connaissances' },
    { name: 'Redmine', logo: 'redmine', tooltip: 'Suivi de tickets & gestion de projet agile' },
    { name: 'Git', logo: 'git', tooltip: 'Contrôle de version distribué pour le développement collaboratif' },
  ];

  /** 💬 6️⃣ Contact rapide */
  quickContact = {
    text: 'Un projet, une idée ? Échangeons ensemble 👇',
    button: { label: 'Contactez-moi', icon: 'mail', route: '/contact' },
  };

  /** 🌱 7️⃣ Valeurs */
  values: Value[] = [
    { icon: 'favorite', title: 'Empathie', description: 'Comprendre les émotions et besoins réels des utilisateurs.' },
    { icon: 'lightbulb', title: 'Clarté', description: 'Simplifier l’expérience sans perdre en impact visuel.' },
    { icon: 'diversity_3', title: 'Accessibilité', description: 'Concevoir des produits utilisables par tous.' },
  ];

  /** 📊 8️⃣ Statistiques */
  stats: Stat[] = [
    { icon: 'brush', label: 'Maquettes réalisées', value: '25+' },
    { icon: 'groups', label: 'Projets utilisateurs', value: '11' },
    { icon: 'computer', label: 'Années d’expérience', value: '10' },
    { icon: 'language', label: 'Collaborations internationales', value: '3' },
  ];


  selectedImage = {
  src: 'assets/img/mocica-desktop-1.webp',
  alt: 'Mocica – Accueil (desktop) version 1',
};

galleryImages = [
  /* 🖥️ VERSIONS DESKTOP */
  // Accueil
  { src: 'assets/img/mocica-desktop-1.webp',  alt: 'Mocica – Accueil (desktop) version 1' },
  { src: 'assets/img/mocica-desktop-2.webp',  alt: 'Mocica – Accueil (desktop) version 2' },
  { src: 'assets/img/mocica-desktop-3.webp',  alt: 'Mocica – Accueil (desktop) version 3' },

  // Notifications
  { src: 'assets/img/mocica-desktop-4.webp',  alt: 'Mocica – Notifications et messagerie (desktop) version 1' },
  { src: 'assets/img/mocica-desktop-5.webp',  alt: 'Mocica – Notifications et messagerie (desktop) version 2' },
  { src: 'assets/img/mocica-desktop-6.webp',  alt: 'Mocica – Notifications et messagerie (desktop) version 3' },

  // Assemblées
  { src: 'assets/img/mocica-desktop-7.webp',  alt: 'Mocica – Liste des assemblées (desktop) version 1' },
  { src: 'assets/img/mocica-desktop-8.webp',  alt: 'Mocica – Liste des assemblées (desktop) version 2' },
  { src: 'assets/img/mocica-desktop-9.webp',  alt: 'Mocica – Liste des assemblées (desktop) version 3' },

  // Guides
  { src: 'assets/img/mocica-desktop-10.webp', alt: 'Mocica – Guides et ressources (desktop) version 1' },
  { src: 'assets/img/mocica-desktop-11.webp', alt: 'Mocica – Guides et ressources (desktop) version 2' },
  { src: 'assets/img/mocica-desktop-12.webp', alt: 'Mocica – Guides et ressources (desktop) version 3' },

  // Calendrier
  { src: 'assets/img/mocica-desktop-13.webp', alt: 'Mocica – Calendrier des réunions (desktop) version 1' },
  { src: 'assets/img/mocica-desktop-14.webp', alt: 'Mocica – Calendrier des réunions (desktop) version 2' },
  { src: 'assets/img/mocica-desktop-15.webp', alt: 'Mocica – Calendrier des réunions (desktop) version 3' },

  // Forum
  { src: 'assets/img/mocica-desktop-16.webp', alt: 'Mocica – Forum des assemblées (desktop) version 1' },
  { src: 'assets/img/mocica-desktop-17.webp', alt: 'Mocica – Forum des assemblées (desktop) version 2' },
  { src: 'assets/img/mocica-desktop-18.webp', alt: 'Mocica – Forum des assemblées (desktop) version 3' },

  // Suggestions
  { src: 'assets/img/mocica-desktop-19.webp', alt: 'Mocica – Suggestions des membres (desktop) version 1' },
  { src: 'assets/img/mocica-desktop-20.webp', alt: 'Mocica – Suggestions des membres (desktop) version 2' },
  { src: 'assets/img/mocica-desktop-21.webp', alt: 'Mocica – Suggestions des membres (desktop) version 3' },

  /* 📱 VERSIONS MOBILE */
  // Accueil
  { src: 'assets/img/mocica-mobile-1.webp', alt: 'Mocica – Accueil (mobile) version 1' },
  { src: 'assets/img/mocica-mobile-2.webp', alt: 'Mocica – Accueil (mobile) version 2' },

  // Fonctionnalités
  { src: 'assets/img/mocica-mobile-3.webp', alt: 'Mocica – Fonctionnalités principales (mobile) version 1' },
  { src: 'assets/img/mocica-mobile-4.webp', alt: 'Mocica – Fonctionnalités principales (mobile) version 2' },
  { src: 'assets/img/mocica-mobile-5.webp', alt: 'Mocica – Fonctionnalités principales (mobile) version 3' },

  // Assemblées
  { src: 'assets/img/mocica-mobile-6.webp', alt: 'Mocica – Liste des assemblées (mobile) version 1' },
  { src: 'assets/img/mocica-mobile-7.webp', alt: 'Mocica – Liste des assemblées (mobile) version 2' },
  { src: 'assets/img/mocica-mobile-8.webp', alt: 'Mocica – Liste des assemblées (mobile) version 3' },

  // Notifications
  { src: 'assets/img/mocica-mobile-9.webp', alt: 'Mocica – Notifications (mobile) version 1' },
  { src: 'assets/img/mocica-mobile-10.webp', alt: 'Mocica – Notifications (mobile) version 2' },
  { src: 'assets/img/mocica-mobile-11.webp', alt: 'Mocica – Notifications (mobile) version 3' },

  // Calendrier
  { src: 'assets/img/mocica-mobile-12.webp', alt: 'Mocica – Calendrier des réunions (mobile) version 1' },
  { src: 'assets/img/mocica-mobile-13.webp', alt: 'Mocica – Calendrier des réunions (mobile) version 2' },
  { src: 'assets/img/mocica-mobile-14.webp', alt: 'Mocica – Calendrier des réunions (mobile) version 3' },

  // Forum
  { src: 'assets/img/mocica-mobile-15.webp', alt: 'Mocica – Forum (mobile) version 1' },
  { src: 'assets/img/mocica-mobile-16.webp', alt: 'Mocica – Forum (mobile) version 2' },
  { src: 'assets/img/mocica-mobile-17.webp', alt: 'Mocica – Forum (mobile) version 3' },

  // Suggestions
  { src: 'assets/img/mocica-mobile-18.webp', alt: 'Mocica – Suggestions des membres (mobile) version 1' },
  { src: 'assets/img/mocica-mobile-19.webp', alt: 'Mocica – Suggestions des membres (mobile) version 2' },
  { src: 'assets/img/mocica-mobile-20.webp', alt: 'Mocica – Suggestions des membres (mobile) version 3' },

  // Profil / Menu
  { src: 'assets/img/mocica-mobile-21.webp', alt: 'Mocica – Profil et menu mobile (version 1)' },
  { src: 'assets/img/mocica-mobile-22.webp', alt: 'Mocica – Profil et menu mobile (version 2)' },
  { src: 'assets/img/mocica-mobile-23.webp', alt: 'Mocica – Profil et menu mobile (version 3)' },
];




selectImage(img: { src: string; alt: string }) {
  this.selectedImage = img;
}



  /** 🚀 9️⃣ Call-to-Action final */
  finalCta = {
    text: 'Prêt·e à créer une expérience utilisateur unique ?',
    button: { label: 'Discutons ensemble', icon: 'send', route: '/contact' },
  };
}
