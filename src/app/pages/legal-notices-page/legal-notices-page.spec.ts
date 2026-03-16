import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticesPage } from './legal-notices-page';

describe('LegalNoticesPage', () => {
  let component: LegalNoticesPage;
  let fixture: ComponentFixture<LegalNoticesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNoticesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalNoticesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
