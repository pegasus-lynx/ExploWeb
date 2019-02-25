import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommenderDetailCardComponent } from './recommender-detail-card.component';

describe('RecommenderDetailCardComponent', () => {
  let component: RecommenderDetailCardComponent;
  let fixture: ComponentFixture<RecommenderDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommenderDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommenderDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
