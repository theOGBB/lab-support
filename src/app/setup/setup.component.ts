import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { AzureDevopsService } from '../services/azure-devops.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  token: string = "";
  org : string = "";
  project: string = "";
  projects!: Array<Project>;

  constructor(private adoService: AzureDevopsService) { }

  ngOnInit(): void {
  }

  displayProjects(): void {
    this.adoService.getProjects(this.token, this.org).subscribe((data) => {
      this.projects = data;
    });
  }

  displayWorkItemTypes(): void {
    
  }
}
