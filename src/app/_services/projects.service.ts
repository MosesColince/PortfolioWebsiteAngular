import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})


export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: "Moshal IT Trainer",
      summary: 'Teach first years Microsoft skills and Computer Essentials',
      description: ' I help first year Moshal students gain skills to navigate their laptops and any basic computer skills.I also help with Microsoft skills such as Work, Exceland PowerPoint from begginer level to advanced level.',
      projectLink: '',
      tags: [Tag.MICROSOFT, Tag.COMPUTERESSENTIALS],
      pictures: ["assets/Screenshot 2024-09-09 235621.png", "assets/Screenshot 2024-09-09 235621.png"],
    },
    {
      id: 1,
      name: "Power Learn Project",
      summary: 'Coding Scholarship to become a Junior software developer',
      description: ' This is a coding learnership which assist students from basic coding skills to junior software development stage',
      projectLink: '',
      tags: [Tag.PYTHON, Tag.DARTWITHFLUTTER, Tag.JAVASCRIPT],
      pictures: ["assets/Screenshot 2024-09-09 235621.png", "assets/Screenshot 2024-09-09 235621.png"]
    },
    {
      id: 2,
      name: "TCS Sustainathon",
      summary: 'Teach first years Microsoft skills and Computer Essentials',
      description: 'This is a .....',
      projectLink: '',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
      pictures: ["assets/Screenshot 2024-09-09 235621.png", "assets/Screenshot 2024-09-09 235621.png"],
    }
    ];

  constructor() {}

   GetProjects(){
    return this.projects;
   }

   GetProjectById (id: Number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }
    return project;
   }

}