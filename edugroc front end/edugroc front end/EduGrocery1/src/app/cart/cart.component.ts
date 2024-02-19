import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductI, products } from '../product-i';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{


items=this.cartService.getItems();
  itemid!: number;
  container:any;
  public counter: number = 1;
  total!: number;
  

constructor(private cartService:CartService){}
  ngOnInit(): void {
    
  }
  
  clearCart(){
    this.items=[];
    return this.items;
  }

  delete(){
    this.items.splice(this.items.indexOf(this.container),1);
  }
 
 
  

validateInput(event:any, i:number){
  const qty = +event.target.value;
  if(qty < 1) {
    event.target.value = this.items[i].qty;
    return;
  }

  this.QtyUpdated(qty, i)
}

QtyUpdated(qty:number, i:number){
    this.items[i].qty = qty;

    this.cartService['setitems'](this.items);
    // this.getTotal();
}

getTotal(){
 
  return this.items.reduce((a,b)=>{
    return (b.itemPrice*b.qty)+a
  },0)
}

  }




