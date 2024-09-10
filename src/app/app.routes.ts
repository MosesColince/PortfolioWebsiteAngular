import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: '**', component: HomeComponent,pathMatch: 'full'},

];
