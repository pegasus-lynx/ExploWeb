import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfilePicComponent } from './add-profile-pic.component';

describe('AddProfilePicComponent', () => {
  let component: AddProfilePicComponent;
  let fixture: ComponentFixture<AddProfilePicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfilePicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfilePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
