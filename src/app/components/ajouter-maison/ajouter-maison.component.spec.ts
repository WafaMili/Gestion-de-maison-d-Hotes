import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMaisonComponent } from './ajouter-maison.component';

describe('AjouterMaisonComponent', () => {
  let component: AjouterMaisonComponent;
  let fixture: ComponentFixture<AjouterMaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterMaisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
