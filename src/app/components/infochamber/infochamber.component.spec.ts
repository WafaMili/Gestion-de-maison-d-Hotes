import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfochamberComponent } from './infochamber.component';

describe('InfochamberComponent', () => {
  let component: InfochamberComponent;
  let fixture: ComponentFixture<InfochamberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfochamberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfochamberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
