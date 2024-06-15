import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonInfoComponent } from './maison-info.component';

describe('MaisonInfoComponent', () => {
  let component: MaisonInfoComponent;
  let fixture: ComponentFixture<MaisonInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisonInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
