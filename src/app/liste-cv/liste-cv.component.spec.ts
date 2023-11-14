import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCVComponent } from './liste-cv.component';

describe('ListeCVComponent', () => {
  let component: ListeCVComponent;
  let fixture: ComponentFixture<ListeCVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeCVComponent],
    });
    fixture = TestBed.createComponent(ListeCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
