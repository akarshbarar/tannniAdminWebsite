import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincorporateComponent } from './admincorporate.component';

describe('AdmincorporateComponent', () => {
  let component: AdmincorporateComponent;
  let fixture: ComponentFixture<AdmincorporateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincorporateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
