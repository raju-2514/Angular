import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWildCardComponent } from './child-wild-card.component';

describe('ChildWildCardComponent', () => {
  let component: ChildWildCardComponent;
  let fixture: ComponentFixture<ChildWildCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildWildCardComponent]
    });
    fixture = TestBed.createComponent(ChildWildCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
