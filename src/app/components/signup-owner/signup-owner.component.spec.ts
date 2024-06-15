import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinupOwnerComponent } from './sinup-owner.component';

describe('SinupOwnerComponent', () => {
  let component: SinupOwnerComponent;
  let fixture: ComponentFixture<SinupOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinupOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinupOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
