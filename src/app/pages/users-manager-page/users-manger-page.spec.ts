import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMangerPage } from './users-manger-page';

describe('UsersMangerPage', () => {
  let component: UsersMangerPage;
  let fixture: ComponentFixture<UsersMangerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersMangerPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersMangerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
