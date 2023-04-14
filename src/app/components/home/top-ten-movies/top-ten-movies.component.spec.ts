import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenMoviesComponent } from './top-ten-movies.component';

describe('TopTenMoviesComponent', () => {
  let component: TopTenMoviesComponent;
  let fixture: ComponentFixture<TopTenMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTenMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTenMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
