import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { EvidenciasService } from '../evidencias.service';
import { evidencias } from '../informacion.model';

@Component({
  selector: 'app-evidencia1',
  templateUrl: './evidencia1.page.html',
  styleUrls: ['./evidencia1.page.scss'],
})
export class Evidencia1Page implements OnInit {

  evidencia : evidencias;

  constructor(private activatedRoute:ActivatedRoute, private evidenciaService: EvidenciasService ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // validar
       const recipeId= paramMap.get('informacionid')
       this.evidencia = this.evidenciaService.obtenerEvidencia(recipeId);
       console.log(this.evidencia)
    })
  }

}
