import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  @Input() project: Project = {} as Project;
  bsModalRef?: BsModalRef;
}

