import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import{FeaturesComponent} from './features/features.component'
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
const routes: Routes = [
  {path:'FEATURES',component:FeaturesComponent},
  {path:'HOME',component:HomeComponent},
  {path:'PRICING',component:PricingComponent},
  {path:'ABOUTUS',component:AboutusComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
