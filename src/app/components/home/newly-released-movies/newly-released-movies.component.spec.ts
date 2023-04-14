import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewlyReleasedMoviesComponent } from './newly-released-movies.component';

describe('NewlyReleasedMoviesComponent', () => {
  let component: NewlyReleasedMoviesComponent;
  let fixture: ComponentFixture<NewlyReleasedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlyReleasedMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewlyReleasedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
