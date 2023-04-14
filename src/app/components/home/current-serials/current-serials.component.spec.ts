import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSerialsComponent } from './current-serials.component';

describe('CurrentSerialsComponent', () => {
  let component: CurrentSerialsComponent;
  let fixture: ComponentFixture<CurrentSerialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentSerialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentSerialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
