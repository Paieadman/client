import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurOrdComponent } from './cur-ord.component';

describe('CurOrdComponent', () => {
  let component: CurOrdComponent;
  let fixture: ComponentFixture<CurOrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurOrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
