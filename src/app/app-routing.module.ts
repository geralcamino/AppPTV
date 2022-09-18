import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
