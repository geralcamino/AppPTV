import { Component, OnInit } from '@angular/core';
import {EvidenciasService} from './evidencias.service'

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

   informacion = []
  
  constructor(private evidenciasService:EvidenciasService) { }

  ngOnInit() {
    this.informacion=this.evidenciasService.getEvidencias()
  }

}
