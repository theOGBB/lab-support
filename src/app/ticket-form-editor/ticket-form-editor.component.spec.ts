import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFormEditorComponent } from './ticket-form-editor.component';

describe('TicketFormEditorComponent', () => {
  let component: TicketFormEditorComponent;
  let fixture: ComponentFixture<TicketFormEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketFormEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFormEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
