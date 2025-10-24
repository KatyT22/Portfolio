import { Injectable } from '@angular/core';
import { SkillGroup } from '../core/models/skill-group.model';
import { Skill } from '../core/models/skill.model';

@Injectable({ providedIn: 'root' })
export class SkillsService {

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
      title: 'Back-End & BDD',
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
      title: 'VR',
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
      title: 'Data, R&D',
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
      title: 'Com. & Collab.',
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
    {
      title: 'languages',
      icon: 'language',
      intro:
        'Communiquer avec clarté et précision dans plusieurs langues, à l’écrit comme à l’oral, pour collaborer dans des contextes internationaux.',
      items: [
        { label: 'Français (langue maternelle)', value: 100 },
        { label: 'Anglais', value: 95 },
        { label: 'Espagnol', value: 75 },
        { label: 'Catalan', value: 65 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: 'psychology_alt',
      intro:
        'Combiner analyse, créativité et sens humain pour relier les dimensions techniques, cognitives et organisationnelles d’un projet.',
      items: [
        { label: 'Résolution de problèmes complexes', value: 85 },
        { label: 'Curiosité et veille technologique', value: 80 },
        { label: 'Rigueur méthodologique', value: 75 },
        { label: 'Pédagogie et vulgarisation', value: 78 },
        { label: 'Autonomie / Priorisation', value: 82 },
      ],
    }
  ];

  /** 🧮 Calcul automatique des moyennes par groupe */
  get skills(): Skill[] {
    return this.groups.map((group) => {
      const avg =
        group.items.reduce((acc, i) => acc + i.value, 0) /
        (group.items.length || 1);

      return {
        label: group.title,
        description: group.intro,
        icon: group.icon,
        value: Math.round(avg),
      };
    });
  }

  /** 📊 Moyenne globale toutes catégories */
  get overallAverage(): number {
    const all = this.skills.map((s) => s.value);
    return Math.round(all.reduce((a, b) => a + b, 0) / all.length);
  }
}