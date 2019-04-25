import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcResultComponent } from './barc-result.component';

describe('BarcResultComponent', () => {
  let component: BarcResultComponent;
  let fixture: ComponentFixture<BarcResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
