import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

export interface SkillGroup {
  title: string;
  icon: string;
  intro: string;
  items: { label: string; value: number }[];
}

 interface Skill {
  label: string;
  value: number;
  icon?: string;
  description?: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatProgressBarModule,
    MatIconModule
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
 


  /** Compétences clés (affichées en cartes ou badges circulaires) */
  keySkills: Skill[] = [
    {
      label: 'Prototypage & Wireframing',
      description:
        'Structurer les parcours utilisateurs et visualiser rapidement des concepts via des maquettes interactives.',
      icon: 'gesture',
      value: 85,
    },
    {
      label: 'Développement Angular / TypeScript',
      description:
        'Donner vie aux interfaces par un code maintenable, réactif et conforme aux bonnes pratiques front-end.',
      icon: 'code',
      value: 90,
    },
    {
      label: 'Développement Java / Spring',
      description:
        'Construire et intégrer des services back-end robustes, sécurisés et performants.',
      icon: 'memory',
      value: 85,
    },
    {
      label: 'Réalité Virtuelle & Recherche UX',
      description:
        'Concevoir des environnements immersifs et étudier les interactions utilisateur dans des contextes expérimentaux.',
      icon: 'vrpano',
      value: 80,
    },
  ];

  /** Groupes de compétences techniques */
  groups: SkillGroup[] = [
    {
      title: 'Front-End & UI',
      icon: 'web',
      intro:
        'Concevoir des interfaces élégantes, réactives et accessibles, en intégrant design system et bonnes pratiques UX.',
      items: [
        { label: 'Angular / TypeScript', value: 90 },
        { label: 'HTML5 / SCSS / CSS3', value: 90 },
        { label: 'Angular Material / MDC', value: 80 },
        { label: 'WordPress / PWA / Flex', value: 80 },
        { label: 'Figma / Balsamiq / Adobe Flex', value: 80 },
      ],
    },
    {
      title: 'Back-End & Base de Données',
      icon: 'memory',
      intro:
        'Développer des services performants, sécurisés et bien structurés pour une architecture complète et fiable.',
      items: [
        { label: 'Java / Spring', value: 85 },
        { label: 'SQL (Oracle / MySQL)', value: 75 },
        { label: 'GraphQL', value: 70 },
        { label: 'Node.js / Express', value: 65 },
        { label: 'PL/SQL / Bash', value: 75 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: 'cloud',
      intro:
        'Automatiser les déploiements et assurer la fiabilité des environnements via une intégration continue maîtrisée.',
      items: [
        { label: 'CI/CD (Jenkins, GitHub/GitLab)', value: 85 },
        { label: 'AWS (Serverless, CloudFormation)', value: 75 },
        { label: 'Docker', value: 70 },
        { label: 'Ansible / Automation', value: 65 },
        { label: 'Git / Versioning', value: 95 },
      ],
    },
    {
      title: 'Réalité Virtuelle & 3D',
      icon: 'vrpano',
      intro:
        'Explorer des environnements immersifs et créer des expériences interactives en 3D temps réel.',
      items: [
        { label: 'Unity 3D / C#', value: 85 },
        { label: 'Design d’environnements interactifs', value: 80 },
        { label: 'Analyse des interactions en VR', value: 70 },
        { label: 'Visual Studio / Asset Store', value: 80 },
      ],
    },
    {
      title: 'Data, Analyse & Recherche',
      icon: 'analytics',
      intro:
        'Appliquer une rigueur scientifique à la recherche UX, en combinant méthodes quantitatives et qualitatives.',
      items: [
        { label: 'SPSS / JASP', value: 70 },
        { label: 'Tableaux d’analyse (Excel)', value: 75 },
        { label: 'Méthodologie expérimentale UX', value: 90 },
      ],
    },
    {
      title: 'Communication & Collaboration',
      icon: 'groups',
      intro:
        'Collaborer efficacement en équipe, documenter les processus et fluidifier la gestion de projet agile.',
      items: [
        { label: 'Méthodes Agiles / Scrum', value: 85 },
        { label: 'Redmine / Gestion de tickets', value: 70 },
        { label: 'Confluence / Documentation', value: 80 },
        { label: 'Traduction technique (FR/EN/ES)', value: 75 },
      ],
    },
  ];
}
