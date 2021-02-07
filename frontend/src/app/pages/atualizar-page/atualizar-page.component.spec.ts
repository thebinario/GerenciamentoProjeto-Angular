import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarPageComponent } from './atualizar-page.component';

describe('AtualizarPageComponent', () => {
  let component: AtualizarPageComponent;
  let fixture: ComponentFixture<AtualizarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
