import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminresidentialComponent } from './adminresidential.component';

describe('AdminresidentialComponent', () => {
  let component: AdminresidentialComponent;
  let fixture: ComponentFixture<AdminresidentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminresidentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminresidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
