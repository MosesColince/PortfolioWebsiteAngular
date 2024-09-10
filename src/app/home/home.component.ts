import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink,RouterLinkActive} from '@angular/router';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CarouselModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
  
})
export class HomeComponent implements OnInit {
  featuredProject = {} as Project;
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('SithomolaMushe - Home')
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }

}
