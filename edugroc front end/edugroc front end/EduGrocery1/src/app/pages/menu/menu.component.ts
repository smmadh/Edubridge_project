import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';

import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../cart.service';
import { ProductI } from '../../product-i';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent  {
products:ProductI={
  id: 1,
  itemName: "Brinjal",
  itemPrice: 200,
  itemImg: "assets/img/brinjal.jpeg",
  qty: 0
};
products1:ProductI={
  id: 2,
  itemName: "IceCreams",
  itemPrice: 250,
  itemImg: "assets/img/icecream.jpg",
  qty: 0
};
products2:ProductI={
  id: 3,
  itemName: "Corinder Powder",
  itemPrice: 100,
  itemImg: "assets/img/corinderpowder.jpg",
  qty: 0
};
products3:ProductI={
  id: 4,
  itemName: "Coriander",
  itemPrice: 20,
  itemImg: "assets/img/img1.webp",
  qty: 0
};
products4:ProductI={
  id: 5,
  itemName: "Corn flakes",
  itemPrice: 250,
  itemImg: "assets/img/img2.jpg",
  qty: 0
};
products5:ProductI={
  id: 6,
  itemName: "Oats",
  itemPrice: 189,
  itemImg: "assets/img/img3.webp",
  qty: 0
};
products6:ProductI={
  id: 7,
  itemName: "Califlower",
  itemPrice: 15,
  itemImg: "assets/img/img4.webp",
  qty: 0
};
products7:ProductI={
  id: 8,
  itemName: "Potato",
  itemPrice: 40,
  itemImg: "assets/img/img5.webp",
  qty: 0
};
products8:ProductI={
  id: 9,
  itemName: "Coffee beans",
  itemPrice: 98,
  itemImg: "assets/img/img6.webp",
  qty: 0
};
products9:ProductI={
  id: 10,
  itemName: "Oats",
  itemPrice: 200,
  itemImg: "assets/img/img7.webp",
  qty: 0
};
products10:ProductI={
  id: 11,
  itemName: "Mango",
  itemPrice: 300,
  itemImg: "assets/img/img8.jpg",
  qty: 0
};
products11:ProductI={
  id: 12,
  itemName: "Pumpkin",
  itemPrice: 60,
  itemImg: "assets/img/img9.webp",
  qty: 0
};
products12:ProductI={
  id: 13,
  itemName: "Orange",
  itemPrice: 99,
  itemImg: "assets/img/img10.jpg",
  qty: 0
};
products13:ProductI={
  id: 14,
  itemName: "Pineapple",
  itemPrice: 30,
  itemImg: "assets/img/img11.webp",
  qty: 0
};
products14:ProductI={
  id: 15,
  itemName: "Beans",
  itemPrice: 40,
  itemImg: "assets/img/img12.webp",
  qty: 0
};
products15:ProductI={
  id: 16,
  itemName: "Raddish",
  itemPrice: 30,
  itemImg: "assets/img/img13.webp",
  qty: 0
};
products16:ProductI={
  id: 17,
  itemName: "Carrot",
  itemPrice: 40,
  itemImg: "assets/img/img14.webp",
  qty: 0
};
products17:ProductI={
  id: 18,
  itemName: "Pea",
  itemPrice: 35,
  itemImg: "assets/img/img16.webp",
  qty: 0
};
products18:ProductI={
  id: 19,
  itemName: "Lemon",
  itemPrice: 28,
  itemImg: "assets/img/img17.jpg",
  qty: 0
};
products19:ProductI={
  id: 20,
  itemName: "Custord Apple",
  itemPrice: 250,
  itemImg: "assets/img/img18.webp",
  qty: 0
};
products20:ProductI={
  id: 21,
  itemName: "Cashew",
  itemPrice: 634,
  itemImg: "assets/img/img19.jpg",
  qty: 0
};
products21:ProductI={
  id: 22,
  itemName: "Capsicum",
  itemPrice: 29,
  itemImg: "assets/img/img20.webp",
  qty: 0
};
products22:ProductI={
  id: 23,
  itemName: "Broccoli",
  itemPrice: 84,
  itemImg: "assets/img/img21.webp",
  qty: 0
};
products23:ProductI={
  id: 24,
  itemName: "Jeera",
  itemPrice: 99,
  itemImg: "assets/img/img22.jpg",
  qty: 0
};
products24:ProductI={
  id: 25,
  itemName: "Banana",
  itemPrice: 50,
  itemImg: "assets/img/img23.jpg",
  qty: 0
};
products25:ProductI={
  id: 26,
  itemName: "Moong dal",
  itemPrice: 180,
  itemImg: "assets/img/img24.webp",
  qty: 0
};
products26:ProductI={
  id: 27,
  itemName: "Green gram",
  itemPrice: 150,
  itemImg: "assets/img/img26.webp",
  qty: 0
};
products27:ProductI={
  id: 28,
  itemName: "Green Chilli",
  itemPrice: 20,
  itemImg: "assets/img/img27.webp",
  qty: 0
};
products28:ProductI={
  id: 29,
  itemName: "Apple",
  itemPrice: 280,
  itemImg: "assets/img/img29.jpg",
  qty: 0
};
products29:ProductI={
  id: 30,
  itemName: "Peanuts",
  itemPrice: 400,
  itemImg: "assets/img/img30.jpg",
  qty: 0
};
products30:ProductI={
  id: 31,
  itemName: "Cucumber",
  itemPrice: 79,
  itemImg: "assets/img/img32.jpg",
  qty: 0
};
products31:ProductI={
  id: 32,
  itemName: "Baddam",
  itemPrice: 550,
  itemImg: "assets/img/img34.jpg",
  qty: 0
};
products32:ProductI={
  id: 33,
  itemName: "Raw Mango",
  itemPrice: 290,
  itemImg: "assets/img/img35.jpg",
  qty: 0
};
products33:ProductI={
  id: 34,
  itemName: "Corn",
  itemPrice: 192,
  itemImg: "assets/img/img36.jpg",
  qty: 0
};
products34:ProductI={
  id: 35,
  itemName: "Oil",
  itemPrice: 650,
  itemImg: "assets/img/img37.jpg",
  qty: 0
};
products35:ProductI={
  id: 36,
  itemName: "Chocobar",
  itemPrice: 25,
  itemImg: "assets/img/img38.jpg",
  qty: 0
};
products36:ProductI={
  id: 37,
  itemName: "Groundnut",
  itemPrice: 150,
  itemImg: "assets/img/img39.jpg",
  qty: 0
};
products37:ProductI={
  id: 38,
  itemName: "Beetroot",
  itemPrice: 99,
  itemImg: "assets/img/img40.webp",
  qty: 0
};
products38:ProductI={
  id: 39,
  itemName: "Pista",
  itemPrice: 720,
  itemImg: "assets/img/img41.jpg",
  qty: 0
};
products39:ProductI={
  id: 40,
  itemName: "Pappaya",
  itemPrice: 49,
  itemImg: "assets/img/img42.jpg",
  qty: 0
};
products40:ProductI={
  id: 41,
  itemName: "Mustard Seeds",
  itemPrice: 350,
  itemImg: "assets/img/img43.jpg",
  qty: 0
};
products41:ProductI={
  id: 42,
  itemName: "Kiwi",
  itemPrice: 139,
  itemImg: "assets/img/img44.jpg",
  qty: 0
};
products42:ProductI={
  id: 43,
  itemName: "Lady'sfinger",
  itemPrice: 99,
  itemImg: "assets/img/lady'sfinger.webp",
  qty: 0
};
products43:ProductI={
  id: 44,
  itemName: "Mirchipowder",
  itemPrice: 200,
  itemImg: "assets/img/mirchipowder.jpg",
  qty: 0
};
products44:ProductI={
  id: 45,
  itemName: "Rice",
  itemPrice: 1200,
  itemImg: "assets/img/rice.webp",
  qty: 0
};
products45:ProductI={
  id: 46,
  itemName: "RedMirchi",
  itemPrice: 299,
  itemImg: "assets/img/redmirchi.webp",
  qty: 0
};
products46:ProductI={
  id: 47,
  itemName: "Paneer",
  itemPrice: 189,
  itemImg: "assets/img/panner.jpg",
  qty: 0
};
products47:ProductI={
  id: 48,
  itemName: "Beans",
  itemPrice: 40,
  itemImg: "assets/img/img12.webp",
  qty: 0
};
  constructor(private cartService:CartService,private route:ActivatedRoute) { }
  
  addTocart(product:ProductI){
    this.cartService.addTocart(product);
    window.alert('product is added to cart!');
  }


  }



  
  // constructor(private service:OrderDetailsService,private cartService:CartService,private route:ActivatedRoute){}
  // itemsData:any;
  // ngOnInit(): void {
  //   this.itemsData = this.service.itemDetails;
  //    throw new Error('Method not implemented.');
  // }

  
  

