import { Injectable } from '@angular/core';
import {evidencias} from './informacion.model'

@Injectable({
  providedIn: 'root'
})
export class EvidenciasService {

  private informacion: evidencias[]=[
    {
      id:'1',
      title:'Fase 1',
      imageURL:'/assets/faseuno.png',
      imageIcon:'/assets/evidencia1.svg',
      comments: ['muy cheveres','muy buenas']
    },
    {
      id:'2',
      title:'Fase 2',
      imageIcon:'/assets/evidencia2.svg',
      imageURL:'/assets/fasedos.png',
      comments: ['Nivel 1','Nivel 2', 'Nivel 3']
    },
    {
      id:'3',
      title:'Fase 3',
      imageIcon:'/assets/evidencia3.svg',
      imageURL:'/assets/fasetres.png',
      comments: ['muy cheveres','muy buenas']
    }
    


   ]

  constructor() { 
    
  }

  getEvidencias(){return [...this.informacion]}
  AddEvidencias(title: string,imageURL: string,imageIcon:string)
  {
    this.informacion.push({
      title,
      imageURL,
      imageIcon,
      comments:[],
      id: this.informacion.length +1 +""
    });
  }

  obtenerEvidencia(informacionid: string)
  {
    return {
      ...this.informacion.find( informacion=> {
        return informacion.id ===informacionid })
    }
  }
}
