import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProjetosComponent } from './listar-projetos.component';

describe('ListarProjetosComponent', () => {
  let component: ListarProjetosComponent;
  let fixture: ComponentFixture<ListarProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProjetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
