import { Injectable } from '@angular/core';
import { Project } from '../core/models/project.model';


@Injectable({ providedIn: 'root' })
export class ProjectsService {
  projects: Project[] = [
  {
    id: 'mannawa-landing',
    title: 'Landing Page – Mannawa',
    description:
      'Conception et développement d’une page d’accueil moderne et performante pour une start-up innovante. Respect de la charte graphique et intégration Angular Material 3.',
    descriptionDetail: `Conception et développement complet d’une page d’accueil pour une start-up du secteur de la mobilité.
L’objectif était de créer une expérience utilisateur fluide et performante tout en respectant une charte graphique moderne inspirée de Material You 2024.

Tâches principales :
- Conception du design dans Figma et prototypage interactif.
- Développement Angular avec Material 3 (MDC).
- Optimisation des performances (audit Lighthouse).
- Intégration CI/CD via GitHub Actions.
- Responsive design et PWA pour compatibilité mobile.

Environnement technique :
- Angular, TypeScript, SCSS
- Material Design 3 (MDC)
- Figma, GitHub CI/CD, Lighthouse.`,
    tools: [
      { name: 'Angular', logo: 'angular', tooltip: 'Framework front-end TypeScript pour applications web' },
      { name: 'TypeScript', logo: 'typescript', tooltip: 'Langage typé pour applications robustes et maintenables' },
      { name: 'SCSS', logo: 'scss', tooltip: 'Stylisation responsive et maintenable' },
      { name: 'Angular Material 3 (MDC)', logo: 'material', tooltip: 'Composants Material Design Components modernes' },
      { name: 'Figma', logo: 'figma', tooltip: 'Conception de maquettes & prototypes interactifs' },
      //{ name: 'PWA / Ionic', logo: 'ionic', tooltip: 'Applications web progressives multiplateformes' },
      { name: 'GitHub CI/CD', logo: 'github', tooltip: 'Intégration continue et déploiement automatisé' },
      //{ name: 'Lighthouse Audit', logo: 'lighthouse', tooltip: 'Audit de performance et d’accessibilité web' },
    ],
    image: 'assets/img/mannawa-landing.png',
  },
  {
    id: 'voltalis-commercial',
    title: `Développement d'application et prospection – Voltalis`,
    description:
      'Suivi et gestion des prospects pour la commercialisation de solutions d’efficacité énergétique. Analyse des besoins et présentation des produits en appui à la relation client.',
    descriptionDetail: `Expérience dans le développement commercial et la prospection pour la société Voltalis.
J’ai participé à la gestion et au suivi des prospects dans le cadre de la commercialisation de solutions d’efficacité énergétique destinées aux particuliers et entreprises.

Tâches principales :
- Analyse des besoins clients.
- Prospection téléphonique et suivi CRM.
- Présentation et argumentation produit.
- Coordination avec les équipes techniques pour la mise en œuvre.
- Reporting et suivi des résultats de campagne.

Compétences développées :
- Communication commerciale et écoute client.
- Gestion du cycle de vente.
- Utilisation d’un CRM professionnel.`,
    tools: [
      { name: 'Communication', logo: 'communication', tooltip: 'Interactions et coordination client-équipe' },
      { name: 'Sales', logo: 'sales', tooltip: 'Suivi des ventes et opportunités commerciales' },
      { name: 'User Needs', logo: 'ux', tooltip: 'Analyse des besoins utilisateurs et amélioration de l’expérience' },
    ],
    image: 'assets/img/passe_facile.png',
  },
  {
    id: 'ifc-formation',
    title: 'Développement Commercial – IFCDIS',
    description:
      'Prospection B2B pour un centre de formation. Analyse des besoins des entreprises et proposition de parcours adaptés. Mise en place d’un suivi relationnel et d’un reporting régulier.',
    descriptionDetail: `Prospection et développement commercial au sein d’un centre de formation professionnelle.
L’objectif était de développer le portefeuille client B2B et d’adapter les offres pédagogiques aux besoins des entreprises.

Tâches principales :
- Prospection téléphonique et qualification des leads.
- Analyse des besoins de formation des entreprises.
- Proposition de parcours adaptés et devis sur mesure.
- Suivi des inscriptions et reporting régulier.
- Collaboration avec l’équipe pédagogique.

Compétences développées :
- Relation client B2B.
- Communication et écoute active.
- Reporting commercial structuré.`,
    tools: [
      { name: 'B2B', logo: 'business', tooltip: 'Prospection et gestion de la relation inter-entreprises' },
      { name: 'CRM', logo: 'crm', tooltip: 'Suivi et fidélisation client' },
      { name: 'Communication', logo: 'communication', tooltip: 'Stratégie de communication commerciale' },
      { name: 'UX Listening', logo: 'ux', tooltip: 'Écoute et analyse des retours utilisateurs' },
    ],
    image: 'assets/img/crm.png',
  },
  {
    id: 'airbus-ui',
    title: 'UI Interne – Airbus (Capgemini)',
    description:
      'Développement de composants Angular Material cohérents avec la charte UX interne. Participation aux cérémonies agiles et intégration continue via Jenkins et Git.',
    descriptionDetail: `Participation au développement d’une interface utilisateur interne pour Airbus, via Capgemini.
Mission orientée sur la cohérence graphique, la qualité du code et l’intégration continue.

Tâches principales :
- Développement de composants Angular Material.
- Intégration d’API et création de vues dynamiques.
- Rédaction de tests unitaires.
- Participation aux cérémonies agiles (Daily, PI Planning, Rétrospective).
- Déploiement via Jenkins et Git.

Environnement technique :
- Angular, TypeScript, SCSS
- Jenkins, Git, CI/CD
- Méthodologie Agile.`,
    tools: [
      { name: 'Angular', logo: 'angular', tooltip: 'Framework front-end TypeScript pour applications web' },
      { name: 'TypeScript', logo: 'typescript', tooltip: 'Langage typé et robuste' },
      { name: 'Angular Material', logo: 'material', tooltip: 'Composants Angular Material UI' },
      { name: 'CI/CD', logo: 'github', tooltip: 'Intégration et déploiement continus' },
      { name: 'Jenkins', logo: 'jenkins', tooltip: 'Automatisation et pipeline de déploiement' },
    ],
    image: 'assets/img/airbus-ui.png',
  },
  {
    id: 'airbus-devops',
    title: 'Migration Cloud AWS – Airbus (Capgemini)',
    description:
      'Migration et automatisation du déploiement d’applications sur AWS Cloud. Configuration Serverless, CloudFormation et pipelines CI/CD.',
    descriptionDetail: `Migration d’applications et automatisation de leur déploiement sur AWS Cloud.
Travail effectué dans un contexte agile au sein d’une équipe de 9 DevOps, avec une forte composante CI/CD.

Tâches principales :
- Déploiement de ressources AWS avec CloudFormation.
- Configuration Serverless et pipeline automatisé Jenkins.
- Gestion des anomalies techniques et documentation.
- Participation aux cérémonies agiles (Daily, Sprint Review).

Environnement technique :
- AWS, Serverless, CloudFormation
- Jenkins, Git, CI/CD.`,
    tools: [
      { name: 'AWS', logo: 'aws', tooltip: 'Cloud computing et infrastructure Serverless' },
      { name: 'Serverless', logo: 'serverless', tooltip: 'Architecture sans serveur pour le cloud' },
      { name: 'CloudFormation', logo: 'aws', tooltip: 'Infrastructure as Code (IaC) sur AWS' },
      { name: 'CI/CD', logo: 'github', tooltip: 'Pipelines automatisés de déploiement' },
      { name: 'Jenkins', logo: 'jenkins', tooltip: 'Intégration continue et orchestration DevOps' },
    ],
    image: 'assets/img/airbus-devops.png',
  },
  {
    id: 'econolibre-blockchain',
    title: 'Module de paiement blockchain – Econolibre',
    description:
      'Développement d’un module de paiement sécurisé pour une monnaie numérique. Requêtes GraphQL, scripts Node.js et intégration au CMS WordPress.',
    descriptionDetail: `Développement d’un module de paiement sécurisé basé sur la blockchain pour une monnaie numérique.
Travail réalisé en télétravail dans un cadre associatif avec un focus sur la sécurité et la performance.

Tâches principales :
- Développement du module de paiement e-commerce.
- Requêtes GraphQL et scripts Node.js.
- Intégration au CMS WordPress et automatisation via cron.
- Tests et validation de la sécurité du module.

Technologies utilisées :
- JavaScript, GraphQL, Node.js
- WordPress, Bash.`,
    tools: [
      { name: 'JavaScript', logo: 'javascript', tooltip: 'Langage de développement dynamique' },
      { name: 'GraphQL', logo: 'graphql', tooltip: 'API flexible et typée pour les échanges de données' },
      { name: 'Node.js', logo: 'nodejs', tooltip: 'Scripts serveurs et automatisation back-end' },
      { name: 'WordPress', logo: 'wordpress', tooltip: 'CMS flexible pour intégration web' },
    ],
    image: 'assets/img/econolibre-blockchain.png',
  },
  {
  id: 'mocica-app',
  title: 'Application web et mobile – Mocica',
  description:
    'Conception de la maquette responsive (desktop et mobile) pour une plateforme associative. Intégration des pages principales et des interactions utilisateur.',
  descriptionDetail:
    `Dans le cadre du projet associatif Mocica, j’ai conçu une interface web et mobile destinée à simplifier 
    la mise en relation entre membres, la gestion des assemblées et la communication interne.  
    Le travail a porté sur la création d’une identité visuelle cohérente, accessible et colorée, 
    ainsi que sur la structuration des parcours utilisateurs pour garantir une expérience fluide sur tous les supports.  

    Sur desktop, les maquettes intègrent des fonctionnalités de recherche, de calendrier et de messagerie interne, 
    organisées dans un tableau de bord clair et fonctionnel.  
    Sur mobile, le design a été repensé pour une navigation intuitive, avec de grands boutons et une hiérarchie visuelle 
    adaptée aux interactions tactiles.  

    L’ensemble du travail a été réalisé sous Figma, avec une approche centrée sur l’ergonomie, 
    la lisibilité et la mise en valeur de la dimension communautaire de l’application.`,
  tools: [
    { name: 'Figma', logo: 'figma', tooltip: 'Prototypage et conception UI/UX' },
    { name: 'Responsive Design', logo: 'ux', tooltip: 'Optimisation multi-écrans' },
  ],
  image: 'assets/img/mocica-desktop-1.webp',
},

  {
    id: 'boye-translation',
    title: 'Traduction de tests en laboratoire – Boyé',
    description:
      'Traduction technique de protocoles et de rapports de tests scientifiques. Adaptation multilingue de documents destinés à la recherche et au développement.',
    descriptionDetail: `Mission de traduction technique au sein du laboratoire Boyé.
Traduction et révision de protocoles d’essais et de rapports techniques depuis l’anglais et l’espagnol vers le français, et inversement.

Tâches principales :
- Traduction et relecture de documents scientifiques.
- Vérification de la cohérence terminologique et conformité au lexique interne.
- Collaboration avec les ingénieurs du laboratoire pour validation des termes techniques.

Compétences mobilisées :
- Rigueur linguistique et technique.
- Connaissances scientifiques.
- Sens du détail et de la précision.`,
    tools: [
      { name: 'Translation', logo: 'writing', tooltip: 'Traduction technique multilingue (FR/EN/ES)' },
      { name: 'Documentation', logo: 'confluence', tooltip: 'Rédaction et mise en forme de documents scientifiques' },
      { name: 'Terminology', logo: 'research', tooltip: 'Validation des termes techniques en contexte industriel' },
    ],
    image: 'assets/img/boye-translation.png',
  },
  {
    id: 'vr-diagnostic',
    title: 'VR – Diagnostic psychologique – LS2N',
    description:
      'Application de réalité virtuelle pour l’évaluation des fonctions exécutives. Design d’un environnement 3D, interactions et tests utilisateurs.',
    descriptionDetail: `Création d’une application de réalité virtuelle destinée à l’évaluation des fonctions exécutives.
Conception d’un environnement 3D immersif et développement d’interactions adaptées à l’étude cognitive.

Tâches principales :
- Conception de l’expérience VR (Unity 3D).
- Programmation en C#.
- Collecte et analyse de données expérimentales.
- Collaboration avec chercheurs et psychologues.

Environnement technique :
- Unity 3D, C#, SPSS, Visual Studio.`,
    tools: [
      { name: 'Unity 3D', logo: 'unity', tooltip: 'Moteur de jeu 3D pour environnements immersifs' },
      { name: 'C#', logo: 'csharp', tooltip: 'Langage de développement Unity' },
      { name: 'UX Research', logo: 'ux', tooltip: 'Recherche utilisateur appliquée aux environnements VR' },
      { name: 'VR Design', logo: 'vr', tooltip: 'Conception d’expériences immersives et interactives' },
    ],
    image: 'assets/img/vr-diagnostic.png',
  },
  {
    id: 'ux-vr-education',
    title: 'VR – Application ludo-éducative – Arts et Métiers',
    description:
      'Conception et développement d’un environnement immersif pour l’apprentissage en réalité virtuelle. Études UX et publications scientifiques internationales.',
    descriptionDetail: `Développement d’une application VR à but éducatif pour un projet de recherche Arts et Métiers.
Objectif : concevoir une expérience interactive d’apprentissage dans un environnement immersif 3D.

Tâches principales :
- Design et développement d’environnements VR.
- Études UX et expérimentation utilisateur.
- Analyse de données et publications scientifiques.

Technologies :
- Unity 3D, C#, SPSS, JASP.`,
    tools: [
      { name: 'Unity 3D', logo: 'unity', tooltip: 'Développement d’expériences VR immersives' },
      { name: 'C#', logo: 'csharp', tooltip: 'Langage objet pour scripts Unity' },
      { name: 'UX Design', logo: 'ux', tooltip: 'Conception centrée utilisateur appliquée à la VR' },
      { name: 'User Testing', logo: 'usertesting', tooltip: 'Évaluation empirique de l’expérience utilisateur' },
      { name: 'SPSS', logo: 'spss', tooltip: 'Analyse statistique et validation expérimentale' },
    ],
    image: 'assets/img/ux-vr-education.png',
  },
  {
    id: 'enac-research',
    title: 'Recherche en interactions visuelles – ENAC',
    description:
      'État de l’art sur les techniques d’interactions visuelles dans le cadre d’un futur projet de conception. Synthèse et classification des expérimentations.',
    descriptionDetail: `Travail de recherche documentaire sur les interactions visuelles dans les systèmes d’affichage aéronautiques.
Réalisation d’une synthèse critique et d’une classification des expérimentations récentes.

Tâches principales :
- Revue de littérature scientifique.
- Analyse et classification des résultats.
- Rédaction d’un rapport de recherche synthétique.`,
    tools: [
      { name: 'Research', logo: 'research', tooltip: 'Méthodologie et analyse scientifique' },
      { name: 'Office 365', logo: 'office', tooltip: 'Rédaction et structuration documentaire' },
      { name: 'Scientific Writing', logo: 'writing', tooltip: 'Rédaction de rapports et publications scientifiques' },
    ],
    image: 'assets/img/enac-research.png',
  },
  {
    id: 'eurotronix-mobile',
    title: 'PMv2 – Application mobile – Eurotronix',
    description:
      'Développement d’une application mobile de visualisation de données en temps réel. Prototypage basse et haute fidélité avant intégration ActionScript/Java.',
    descriptionDetail: `Développement d’une application mobile interne de visualisation en temps réel.
Phase de conception UI suivie d’un prototypage et intégration dans l’environnement existant.

Tâches principales :
- Réalisation de maquettes sur Balsamiq.
- Développement Flex/ActionScript et Java.
- Tests d’intégration et validation des flux de données.`,
    tools: [
      { name: 'Java', logo: 'java', tooltip: 'Langage de développement back-end et mobile' },
      { name: 'Flex', logo: 'flex', tooltip: 'Framework RIA (Rich Internet Applications)' },
      { name: 'ActionScript', logo: 'actionscript', tooltip: 'Langage orienté Flash pour UI dynamiques' },
      { name: 'Balsamiq', logo: 'balsamiq', tooltip: 'Outil de wireframing et prototypage rapide' },
    ],
    image: 'assets/img/eurotronix-mobile.png',
  },
];



  getAll() {
    return this.projects;
  }
  getById(id: string) {
    return this.projects.find((p) => p.id === id);
  }
}
