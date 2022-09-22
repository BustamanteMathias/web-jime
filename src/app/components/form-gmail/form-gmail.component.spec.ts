import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGmailComponent } from './form-gmail.component';

describe('FormGmailComponent', () => {
  let component: FormGmailComponent;
  let fixture: ComponentFixture<FormGmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
