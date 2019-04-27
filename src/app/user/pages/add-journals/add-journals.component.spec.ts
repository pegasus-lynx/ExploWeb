import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJournalsComponent } from './add-journals.component';

describe('AddJournalsComponent', () => {
  let component: AddJournalsComponent;
  let fixture: ComponentFixture<AddJournalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJournalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
