import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { Skill } from '../../core/models/skill.model';
import { SkillGroup } from '../../core/models/skill-group.model';
import { SkillsService } from '../../services/skills.service';


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

  groups: SkillGroup[] = [];
 
  constructor(private skillsService: SkillsService) {}
 
  ngOnInit() {
    this.groups = this.skillsService.groups;
  }
}
