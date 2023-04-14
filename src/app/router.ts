import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MovieComponent } from "./components/movie/movie.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { SeriesComponent } from "./components/series/series.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

    
export const routes: Routes=[
    {
      path: "",
      component: LayoutComponent,
      children:[
        {
            path: "",
            component: HomeComponent
          },
          {
            path: "home",
            component: HomeComponent
          },
          {
            path: "movie",
            component: MovieComponent
          },
          {
            path: "series",
            component: SeriesComponent
          },
          {
            path: "login",
            component: LoginComponent
          },
          {
            path: "register",
            component: RegisterComponent
          },
          {
            path: "categories",
            component: CategoriesComponent
          },
          {
            path: "**",
            component: NotfoundComponent
          },
      ]
    },
]