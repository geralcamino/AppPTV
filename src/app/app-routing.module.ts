import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'slides',
    pathMatch: 'full'
  },
  {
    path: 'informacion',
    children: [{
      path: "",
      loadChildren: () => import('./informacion/informacion.module').then( m => m.InformacionPageModule)
    },
    {
      path:':informacionid',
      loadChildren: ()=> import('./informacion/evidencia1/evidencia1.module').then( m => m.Evidencia1PageModule)
    }
  
  ]
  },
  {
    path: 'programas',
    loadChildren: () => import('./programas/programas.module').then( m => m.ProgramasPageModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./acerca/acerca.module').then( m => m.AcercaPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
