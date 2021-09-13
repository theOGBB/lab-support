import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Project } from '../models/project';
import { WorkItemType } from '../models/workItemType';
import { AzureDevopsService } from '../services/azure-devops.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  token = new FormControl();
  org = new FormControl();
  project = new FormControl();
  workItemType = new FormControl();
  
  projects!: Array<Project>;
  wits!: Array<WorkItemType>;

  constructor(private adoService: AzureDevopsService) { }

  ngOnInit(): void {
  }

  displayProjects(): void {
    this.adoService.getProjects(this.token.value, this.org.value).subscribe((data) => {
      this.projects = data;
    });
  }

  displayWorkItemTypes(): void {
    this.adoService.getWorkItemTypes(this.token.value, this.org.value, this.project.value).subscribe((data) => {
      this.wits = data;
    });
  }

  saveSettings(): void {
    console.log(this.token.value);
    console.log(this.org.value);
    console.log(this.project.value);
    console.log(this.workItemType.value);

    //TODO - setup service to save these settings
  }
}
