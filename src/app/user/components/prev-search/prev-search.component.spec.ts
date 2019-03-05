import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevSearchComponent } from './prev-search.component';

describe('PrevSearchComponent', () => {
  let component: PrevSearchComponent;
  let fixture: ComponentFixture<PrevSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
