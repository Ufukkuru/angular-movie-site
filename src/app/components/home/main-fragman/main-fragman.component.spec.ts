import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFragmanComponent } from './main-fragman.component';

describe('MainFragmanComponent', () => {
  let component: MainFragmanComponent;
  let fixture: ComponentFixture<MainFragmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFragmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFragmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
