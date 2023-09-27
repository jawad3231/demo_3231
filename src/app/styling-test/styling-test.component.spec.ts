import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingTestComponent } from './styling-test.component';

describe('StylingTestComponent', () => {
  let component: StylingTestComponent;
  let fixture: ComponentFixture<StylingTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StylingTestComponent]
    });
    fixture = TestBed.createComponent(StylingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
