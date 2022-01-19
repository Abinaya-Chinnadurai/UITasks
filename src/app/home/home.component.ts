import { Component, OnInit } from '@angular/core';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { PricingComponent } from '../pricing/pricing.component';
import { PriocingAbtComponent } from '../priocing-abt/priocing-abt.component';
import { FounderComponent } from '../founder/founder.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
