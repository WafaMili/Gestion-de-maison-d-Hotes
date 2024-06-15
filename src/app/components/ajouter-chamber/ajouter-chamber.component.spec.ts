import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterChamberComponent } from './ajouter-chamber.component';

describe('AjouterChamberComponent', () => {
  let component: AjouterChamberComponent;
  let fixture: ComponentFixture<AjouterChamberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterChamberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterChamberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
