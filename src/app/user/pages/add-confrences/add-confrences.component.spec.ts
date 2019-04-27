import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConfrencesComponent } from './add-confrences.component';

describe('AddConfrencesComponent', () => {
  let component: AddConfrencesComponent;
  let fixture: ComponentFixture<AddConfrencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConfrencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConfrencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
