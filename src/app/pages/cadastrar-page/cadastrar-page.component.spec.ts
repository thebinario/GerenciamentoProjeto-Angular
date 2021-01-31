import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPageComponent } from './cadastrar-page.component';

describe('CadastrarPageComponent', () => {
  let component: CadastrarPageComponent;
  let fixture: ComponentFixture<CadastrarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
