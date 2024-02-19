import { Injectable } from '@angular/core';
import { ProductI, products } from './product-i';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;


  //method to addtocart
addTocart(product:ProductI){
  this.items.push(product);
  // this.getTotalPrice();
  
}

//get items from cart
getItems(){
  return this.items;
}

//clear cart
clearCart(){
  this.items=[];
  return this.items;
}


// getTotalPrice(){
//   let grandTotal=0;
//   this.items.map((a:any)=>{
//     grandTotal+=a.total;
//   })
// }





  items:ProductI[]=[];
  constructor() { }

}
