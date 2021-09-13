import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { WorkItemType } from '../models/workItemType';

@Injectable({
  providedIn: 'root'
})
export class AzureDevopsService {

  constructor() { }

  //TODO: not actually implemented just mocked
  getProjects(token:string, org: string): Observable<Array<Project>> {
    return new Observable((observer) => {
      observer.next([{id: 1, name:"Crow Canyon Test"}]);
      observer.complete();

      return {unsubscribe() {}};
    });
  }

  getWorkItemTypes(token:string, org: string, project: Project): Observable<Array<WorkItemType>> {
    return new Observable((obs) => {
      obs.next([{id: 1, name: "Requirement"}, {id: 2, name: "Bug"}]);
      obs.complete();

      return {unsubscribe() {}};
    })
  }
}
