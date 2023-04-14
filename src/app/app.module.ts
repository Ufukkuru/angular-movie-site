import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { SeriesComponent } from './components/series/series.component';
import { NewAndPopularComponent } from './components/new-and-popular/new-and-popular.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { routes } from './router';
import { SearchComponent } from './components/layout/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TopTenMoviesComponent } from './components/home/top-ten-movies/top-ten-movies.component';
import { NewlyReleasedMoviesComponent } from './components/home/newly-released-movies/newly-released-movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PopularMoviesComponent } from './components/home/popular-movies/popular-movies.component';
import { OwlCarousel2OptionsDirective } from './components/owl-carousel2-options.directive';
import { CurrentSerialsComponent } from './components/home/current-serials/current-serials.component';
import { MainFragmanComponent } from './components/home/main-fragman/main-fragman.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    MovieComponent,
    SeriesComponent,
    NewAndPopularComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    CategoriesComponent,
    TopTenMoviesComponent,
    NewlyReleasedMoviesComponent,
    PopularMoviesComponent,
    OwlCarousel2OptionsDirective,
    CurrentSerialsComponent,
    MainFragmanComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
