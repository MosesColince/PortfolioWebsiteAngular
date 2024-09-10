import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ProjectCardComponent, CommonModule],  
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('SithomolaMushe - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
