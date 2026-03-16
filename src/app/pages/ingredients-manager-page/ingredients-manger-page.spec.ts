import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsMangerPage } from './ingredients-manger-page';

describe('IngredientsMangerPage', () => {
  let component: IngredientsMangerPage;
  let fixture: ComponentFixture<IngredientsMangerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientsMangerPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientsMangerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
