import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAndPopularComponent } from './new-and-popular.component';

describe('NewAndPopularComponent', () => {
  let component: NewAndPopularComponent;
  let fixture: ComponentFixture<NewAndPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAndPopularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAndPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
