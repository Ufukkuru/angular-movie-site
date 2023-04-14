import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-top-ten-movies',
  templateUrl: './top-ten-movies.component.html',
  styleUrls: ['./top-ten-movies.component.css']
})
export class TopTenMoviesComponent {

  top_ten_movies = [
    {img:'assets/images/shadow-master.jpg'},
    {img:'assets/images/finch.jpg'},
    {img:'assets/images/fantastic-monster-dumbledor-secret.jpg'},
    {img:'assets/images/shang-chi.jpg'},
    {img:'assets/images/thor-love-and-thunder.jpg'},
    {img:'assets/images/troll-esrarengiz-canavar.jpg'},
    {img:'assets/images/wakanda-forever.jpg'},
    {img:'assets/images/Intouchables.jpg'},
    {img:'assets/images/dont-look-up.jpg'},
    {img:'assets/images/ip-man-4.jpg'},
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-angle-left text-light"></i>', '<i class="fa-solid fa-angle-right text-light"></i>'],
    responsive: {
      0: {
        items: 1.1,
        nav:false,
        dots:false
      },
      250: {
        items: 1.5,
        nav:false,
        dots:false
      },
      320: {
        items: 1.7,
        nav:false,
        dots:false
      },
      350: {
        items: 1.8,
        nav:false,
        dots:false
      },
      400: {
        items: 2,
        nav:false,
        dots:false
      },
      450: {
        items: 2.4,
        nav:false,
        dots:false
      },
      500: {
        items: 2.5,
        nav:false,
        dots:false
      },
      550: {
        items: 2.5,
        nav:false,
        dots:false
      },
      650: {
        items: 2.6,
        nav:false,
        dots:false
      },
      700:{
        items: 2.8,
        nav:false,
        dots:false
      },
      800:{
        items: 2.8,
        nav:false,
        dots:false
      },
      900: {
        items: 3.2
      },
      940: {
        items: 3.3
      },
      1000: {
        items: 3.5
      },
      1100: {
        items: 3.8
      },
      1200: {
        items: 4.2
      },
      1300: {
        items: 4.5
      },
      1400: {
        items: 5
      },
      1500: {
        items: 5.2
      },
      1600: {
        items: 5.6
      },
      1700: {
        items: 5.7
      },
      1800: {
        items: 6.2
      },
      1900: {
        items: 6.7
      },
      2000: {
        items: 7.2
      },
    },
    nav: true
  }
}
