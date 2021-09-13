import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

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
}
