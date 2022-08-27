import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCadastroComponent } from './add-edit-cadastro.component';

describe('AddEditCadastroComponent', () => {
  let component: AddEditCadastroComponent;
  let fixture: ComponentFixture<AddEditCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
