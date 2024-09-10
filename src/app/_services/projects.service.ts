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
      summary: 'Teach first years Microsoft skills and Computer Essentials. ',
      description: ' I help first year Moshal students gain skills to navigate their laptops and any basic computer skills.I also help with Microsoft skills such as Work, Exceland PowerPoint from begginer level to advanced level.',
      projectLink: '',
      tags: [Tag.MICROSOFT, Tag.COMPUTERESSENTIALS],
      pictures: [""],
    },
    {
      id: 1,
      name: "Power Learn Project",
      summary: 'Coding Scholarship to become a Junior software developer',
      description: ' This is a coding learnership which assist students from basic coding skills to junior software development stage',
      projectLink: '',
      tags: [Tag.PYTHON, Tag.DARTWITHFLUTTER, Tag.JAVASCRIPT],
      pictures: ["assets/Screenshot 2024-09-09 235621.png"],
    },
    {
      id: 2,
      name: "TCS Sustainathon",
      summary: 'A Hackathon',
      description: 'This hackathon aimed to solve problems that empowers and engages the youth to address pressing societal and sustainability issues ',
      projectLink: '',
      tags: [Tag.TEAMWORK, Tag.PROBLEMSOLVING],
      pictures: [""],
    },
    {
      id: 3,
      name: "GTS Ambassador",
      summary: 'Help facilitate orientation Week for first years',
      description: 'During the first of Orientation week at wits, I worked to helpfacilitate activities aimed at welcoming first years to university',
      projectLink: '',
      tags: [Tag.TEAMWORK, Tag.FACILITATOR],
      pictures: [""],
    },
    {
      id: 4,
      name: "FYE Mentor & Mentor Lead",
      summary: 'I mentor first years and help them with the transition from high school to University',
      description: 'I mentor first years throughout the year so that they can have guidance and all resources they may need through their journey and transition',
      projectLink: '',
      tags: [Tag.MENTORING, Tag.FACILITATOR],
      pictures: [""],
    },
    {
      id: 5,
      name: "SRA Digital And Marketing Officer",
      summary: 'I work as a Digital and Marketing officer at Campus Central Student Accomodation',
      description: 'I help create posters, serve as the social media manager and presence and content creation. At certain days I assist manager with day to day residence management tasks',
      projectLink: '',
      tags: [Tag.DIGITAL],
      pictures: [""],
    },
    {
      id: 6,
      name: "CCDU Peer Educator & Circle Of friendship",
      summary: 'I volunteer at the Wits Peer Educator and Circle of Friendship Initiative',
      description: 'I volunteer in facilitationg events aimed for students by the CCDU at wits and also part of the Circle of Friendship which we form a group of friends for those who struggle making friends',
      projectLink: '',
      tags: [Tag.FACILITATOR, Tag.TEAMWORK],
      pictures: [""],
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