import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../core/models/project.model';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProjectDialogComponent } from './project-dialog.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatChipsModule, 
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private svc: ProjectsService, private dialog: MatDialog) {
    this.projects = svc.getAll();
  }

  open(p: Project) {
    this.dialog.open(ProjectDialogComponent, {
      data: p,
      width: '90vw',        // ou 'min(95vw, 1100px)'
      maxWidth: '1100px',   // limite max
      height: 'auto',
      maxHeight: '90vh',    // pour éviter que ça déborde en hauteur
      panelClass: 'project-dialog',
    });
  }
}
