import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaTrafficPageComponent } from './la-traffic-page.component';

describe('LaTrafficPageComponent', () => {
  let component: LaTrafficPageComponent;
  let fixture: ComponentFixture<LaTrafficPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaTrafficPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaTrafficPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
