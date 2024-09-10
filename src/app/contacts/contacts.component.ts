import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('SithomolaMushe - Contacts');
  }


  copyEmail() {
    const email = 'mosescolince161@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      alert('Email copied to clipboard!');
    });
  }
}
