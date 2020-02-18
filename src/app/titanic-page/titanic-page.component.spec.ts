import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitanicPageComponent } from './titanic-page.component';

describe('TitanicPageComponent', () => {
  let component: TitanicPageComponent;
  let fixture: ComponentFixture<TitanicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitanicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitanicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
