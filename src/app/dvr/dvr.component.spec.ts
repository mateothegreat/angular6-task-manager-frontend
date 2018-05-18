import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DVRComponent } from './dvr.component';

describe('DVRComponent', () => {
  let component: DVRComponent;
  let fixture: ComponentFixture<DVRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DVRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DVRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
