import { Route } from '@angular/router';

export const routes: Route[] = [
 
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    data: { title: 'Accueil' },
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./pages/experience/experience.component').then(
        (m) => m.ExperienceComponent
      ),
    data: { title: 'Parcours' },
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
    data: { title: 'Projets' },
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./pages/skills/skills.component').then((m) => m.SkillsComponent),
    data: { title: 'Compétences' },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
    data: { title: 'Contact' },
  },
  { path: '**', redirectTo: '' } // ✅ Redirige vers racine
];
