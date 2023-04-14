import { Component,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-fragman',
  templateUrl: './main-fragman.component.html',
  styleUrls: ['./main-fragman.component.css']
})
export class MainFragmanComponent {
  
  @ViewChild('video')
  video!: ElementRef<HTMLVideoElement>;
  @ViewChild('mutedButton')
  mutedButton!: ElementRef<HTMLElement>;
  @ViewChild('playButton')
  playButton!: ElementRef<HTMLElement>;
  isPlaying:boolean=false
  isMuted:boolean=false

  toggleMute() {
    const vid = this.video.nativeElement;
    vid.muted = !vid.muted;
    this.isMuted = vid.muted
  }

    togglePlay() {
      const video = this.video.nativeElement;
      if (video.paused) {
        video.play();
        this.isPlaying = true;
      } else {
        video.pause();
        this.isPlaying = false;
      }
    }
  
}
