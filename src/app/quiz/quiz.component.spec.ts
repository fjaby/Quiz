import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QUizComponent } from './quiz.component';

describe('QUizComponent', () => {
  let component: QUizComponent;
  let fixture: ComponentFixture<QUizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QUizComponent]
    });
    fixture = TestBed.createComponent(QUizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
