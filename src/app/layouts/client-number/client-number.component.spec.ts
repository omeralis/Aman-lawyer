import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNumberComponent } from './client-number.component';

describe('ClientNumberComponent', () => {
  let component: ClientNumberComponent;
  let fixture: ComponentFixture<ClientNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
