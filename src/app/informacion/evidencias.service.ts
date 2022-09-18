import { Injectable } from '@angular/core';
import {evidencias} from './informacion.model'

@Injectable({
  providedIn: 'root'
})
export class EvidenciasService {

  private informacion: evidencias[]=[
    {
      id:'1',
      title:'Evidencia 1',
      imageURL:'/assets/evidencia1.svg',
      comments: ['muy cheveres','muy buenas']
    },
    {
      id:'2',
      title:'Evidencia 2',
      imageURL:'/assets/evidencia2.svg',
      comments: ['muy cheveres','muy buenas']
    }

   ]

  constructor() { 
    
  }

  getEvidencias(){return [...this.informacion]}
  AddEvidencias(title: string,imageURL: string)
  {
    this.informacion.push({
      title,
      imageURL,
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
