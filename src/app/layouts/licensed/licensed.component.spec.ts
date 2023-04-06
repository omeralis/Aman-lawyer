import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensedComponent } from './licensed.component';

describe('LicensedComponent', () => {
  let component: LicensedComponent;
  let fixture: ComponentFixture<LicensedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicensedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicensedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
