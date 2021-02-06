import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerAuthorizationComponent} from './customer-authorization.component';

describe('CustomerAuthorizationComponent', () => {
  let component: CustomerAuthorizationComponent;
  let fixture: ComponentFixture<CustomerAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerAuthorizationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
