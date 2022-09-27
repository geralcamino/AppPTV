import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';




@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  constructor(private videoPlayer: VideoPlayer) {

    this.videoPlayer.play('file://www/assets/movie.mp4').then(() => {
 console.log('video completed');
}).catch(err => {
 console.log(err);
});
   }


  

  ngOnInit() {
  }

}
