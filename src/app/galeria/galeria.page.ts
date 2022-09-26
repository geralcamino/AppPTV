import { Component, OnInit } from '@angular/core';
declare var HKVideoPlayer;

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  constructor() { }


  play()
  {
     HKVideoPlayer.play("https://www.youtube.com/watch?v=AbqjEBd9KX4&t=292s");
  }

  ngOnInit() {
  }

}
