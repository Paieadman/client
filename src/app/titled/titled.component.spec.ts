import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitledComponent } from './titled.component';

describe('TitledComponent', () => {
  let component: TitledComponent;
  let fixture: ComponentFixture<TitledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
