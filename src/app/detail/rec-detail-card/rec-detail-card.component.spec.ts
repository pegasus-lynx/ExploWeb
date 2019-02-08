import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecDetailCardComponent } from './rec-detail-card.component';

describe('RecDetailCardComponent', () => {
  let component: RecDetailCardComponent;
  let fixture: ComponentFixture<RecDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
