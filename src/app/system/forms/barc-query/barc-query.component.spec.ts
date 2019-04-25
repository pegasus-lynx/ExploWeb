import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcQueryComponent } from './barc-query.component';

describe('BarcQueryComponent', () => {
  let component: BarcQueryComponent;
  let fixture: ComponentFixture<BarcQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
