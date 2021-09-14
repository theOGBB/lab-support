import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TextFieldComponent } from './controls/text-field/text-field.component';

@Component({
  selector: 'app-ticket-form-editor',
  templateUrl: './ticket-form-editor.component.html',
  styleUrls: ['./ticket-form-editor.component.css']
})
export class TicketFormEditorComponent implements OnInit {

  layoutData = [{
    type: "text",
    name: "test",
  }, {
    type: "text",
    name: "test2"
  }];

  constructor() { }

  ngOnInit(): void {    
  }

  add_component(): void {
  
  }

}
