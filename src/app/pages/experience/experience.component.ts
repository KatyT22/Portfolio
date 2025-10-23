import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



/** 🔹 Modèle de données pour une expérience professionnelle */
interface ExperienceItem {
  title: string;
  subtitle: string;
  description: string;
  icon?: string; // facultatif pour affichage décoratif
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  /** 🧭 Section Parcours professionnel */
  section = {
    title: 'Parcours',
    intro: `Du code à la conception, jusqu’à la relation commerciale, j’unis rigueur technique, créativité et empathie pour créer des expériences cohérentes et centrées sur l’humain.`,
  };

  /** 💼 Expériences professionnelles */
  experiences: ExperienceItem[] = [
  {
    title: 'Doctorat — Sciences des Métiers de l’Ingénieur',
    subtitle: '2015 – 2018 | École Nationale Supérieure des Arts et Métiers (ENSAM)',
    description: `Thèse intitulée « Conception et évaluation de l’expérience utilisateur en environnement virtuel immersif ». 
Encadrée par M. Simon Richir (Professeur, ENSAM Laval) et co-encadrée par Mme Émilie Loup-Escande (Université de Picardie) 
et M. Olivier Christmann (ENSAM Laval). 
Soutenue le 12 mars 2018 avec nomination au prix de thèse Pierre Bézier.`,
    icon: 'school',
  },
  {
    title: 'Master — Interaction Homme-Machine (IHM)',
    subtitle: '2011 – 2013 | Université Toulouse III – Paul Sabatier',
    description: `Formation spécialisée dans la conception d’interfaces, les interactions gestuelles et la recherche en ergonomie cognitive. 
Projet de fin d’études : « Gesture Control Exploration » (Airbus). 
Stage : développement d’une application mobile responsive pour la visualisation de mesures physiques en temps réel.`,
    icon: 'psychology',
  },
  {
    title: 'Licence — Mathématiques et Informatique Fondamentale (MathInfo)',
    subtitle: '2009 – 2010 | Université Toulouse III – Paul Sabatier',
    description: `Formation approfondie en algorithmique, structures de données, logique mathématique et programmation orientée objet. 
Approche théorique combinant mathématiques appliquées et informatique fondamentale.`,
    icon: 'computer',
  },
  {
    title: 'DEUG — Mathématiques et Informatique Fondamentale (MathInfo)',
    subtitle: '2007 – 2009 | Université Toulouse III – Paul Sabatier',
    description: `Diplôme d’Études Universitaires Générales axé sur les bases de la logique, de l’analyse mathématique et de la programmation. 
Acquisition des fondamentaux du raisonnement algorithmique et de la modélisation informatique.`,
    icon: 'functions',
  },
  {
    title: 'DUT — Génie Chimique & Génie des Procédés',
    subtitle: '2005 – 2007 | IUT A – Université Toulouse III',
    description: `Étude des procédés industriels et de la transformation chimique des matières. 
Première approche scientifique avant réorientation vers l’informatique.`,
    icon: 'science',
  },
  {
    title: 'Baccalauréat Scientifique — Spécialité Physique-Chimie',
    subtitle: '2005 | Lycée Comte de Foix (Principauté d’Andorre)',
    description: `Baccalauréat scientifique avec spécialité Physique-Chimie, première formation générale et expérimentale orientée vers les sciences.`,
    icon: 'school',
  },
];
}