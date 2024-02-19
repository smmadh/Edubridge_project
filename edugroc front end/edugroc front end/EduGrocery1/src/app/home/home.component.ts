import { Component } from '@angular/core';
import { OrderDetailsService } from '../services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service:OrderDetailsService) { }
  itemsData:any;
  ngOnInit(): void {
    this.itemsData = this.service.itemDetails;
  }
}
