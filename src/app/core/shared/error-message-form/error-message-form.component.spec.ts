import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageFormComponent } from './error-message-form.component';

describe('ErrorMessageFormComponent', () => {
  let component: ErrorMessageFormComponent;
  let fixture: ComponentFixture<ErrorMessageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorMessageFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
