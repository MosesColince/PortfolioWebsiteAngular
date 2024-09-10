import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('SithomolaMushe - Contacts')
  }
}
