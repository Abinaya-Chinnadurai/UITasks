import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { PriocingAbtComponent } from './priocing-abt/priocing-abt.component';
import { FounderComponent } from './founder/founder.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturesComponent } from './features/features.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LsCompOneComponent } from './ls-comp-one/ls-comp-one.component';
import { LsCompTwoComponent } from './ls-comp-two/ls-comp-two.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ViewChildMethodParentComponent } from './view-child-method-parent/view-child-method-parent.component';
import { ViewChildMethodChildComponent } from './view-child-method-child/view-child-method-child.component';
import { LsArrOneComponent } from './ls-arr-one/ls-arr-one.component';
import { LsArrTwoComponent } from './ls-arr-two/ls-arr-two.component';
import { ChildTwoComponent } from './child-two/child-two.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    FooterComponent,
    PricingComponent,
    PriocingAbtComponent,
    FounderComponent,
    NavbarComponent,
    FeaturesComponent,
    ParentComponent,
    ChildComponent,
    LsCompOneComponent,
    LsCompTwoComponent,
    ViewParentComponent,
    ViewChildComponent,
    ParentOneComponent,
    ChildOneComponent,
    ViewChildMethodParentComponent,
    ViewChildMethodChildComponent,
    LsArrOneComponent,
    LsArrTwoComponent,
    ChildTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
