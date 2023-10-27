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
    path: 'gender-prediction',
    loadChildren: () => import('./gender-prediction/gender-prediction.module').then( m => m.GenderPredictionPageModule)
  },
  {
    path: 'age-determination',
    loadChildren: () => import('./age-determination/age-determination.module').then( m => m.AgeDeterminationPageModule)
  },
  {
    path: 'universities',
    loadChildren: () => import('./universities/universities.module').then( m => m.UniversitiesPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
