import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePacienteComponent } from './homepaciente.component';

describe('HomeComponent', () => {
  let component: HomePacienteComponent;
  let fixture: ComponentFixture<HomePacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
