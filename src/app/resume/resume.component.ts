import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap/accordion'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AccordionModule, CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('SithomolaMushe - Resume');
  }

  DownloadFiles() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/SithomolaMusheColince.pdf');
    link.setAttribute('download', 'SithomolaMusheColince.pdf');
    link.click();
    link.remove();
  }
}
