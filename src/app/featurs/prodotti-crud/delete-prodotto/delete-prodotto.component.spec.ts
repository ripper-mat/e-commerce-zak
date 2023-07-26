import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProdottoComponent } from './delete-prodotto.component';

describe('DeleteProdottoComponent', () => {
  let component: DeleteProdottoComponent;
  let fixture: ComponentFixture<DeleteProdottoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteProdottoComponent]
    });
    fixture = TestBed.createComponent(DeleteProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
