import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmaganeuserComponent } from './adminmaganeuser.component';

describe('AdminmaganeuserComponent', () => {
  let component: AdminmaganeuserComponent;
  let fixture: ComponentFixture<AdminmaganeuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmaganeuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmaganeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
