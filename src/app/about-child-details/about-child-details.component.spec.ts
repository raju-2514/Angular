import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChildDetailsComponent } from './about-child-details.component';

describe('AboutChildDetailsComponent', () => {
  let component: AboutChildDetailsComponent;
  let fixture: ComponentFixture<AboutChildDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutChildDetailsComponent]
    });
    fixture = TestBed.createComponent(AboutChildDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
