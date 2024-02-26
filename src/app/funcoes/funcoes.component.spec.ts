import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncoesComponent } from './funcoes.component';

describe('FuncoesComponent', () => {
  let component: FuncoesComponent;
  let fixture: ComponentFixture<FuncoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuncoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
