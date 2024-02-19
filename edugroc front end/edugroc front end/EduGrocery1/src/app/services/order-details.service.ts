import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  baseUrl="http://localhost:8080/user";

  constructor(private httpClient:HttpClient) { }


  // connection
  registerUser(user:User): Observable<Object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);

  }

  // itemdetails 
  
  itemDetails = [
    {
      id:1,
      itemName:"Brinjal",
      itemPrice:200,
      itemImg:"assets/img/brinjal.jpeg"
    },
    {
      id:2,
      itemName:"IceCreams",
      itemPrice:250,
      itemImg:"assets/img/icecream.jpg"
    },
    {
      id:3,
      itemName:"Corinder Powder",
      itemPrice:100,
      itemImg:"assets/img/corinderpowder.jpg"
    },
    {
      id:4,
      itemName:"Coriander",
      itemPrice:20,
      itemImg:"assets/img/img1.webp"
    },
    {
      id:5,
      itemName:"Corn flakes",
      itemPrice:250,
      itemImg:"assets/img/img2.jpg"
    },
    {
      id:6,
      itemName:"Oats",
      itemPrice:189,
      itemImg:"assets/img/img3.webp"
    },
    {
      id:7,
      itemName:"Califlower",
      itemPrice:15,
      itemImg:"assets/img/img4.webp"
    },
    {
      id:8,
      itemName:"Potato",
      itemPrice:40,
      itemImg:"assets/img/img5.webp"
    },
    {
      id:9,
      itemName:"Coffee beans",
      itemPrice:98,
      itemImg:"assets/img/img6.webp"
    },
    {
      id:10,
      itemName:"Oats",
      itemPrice:200,
      itemImg:"assets/img/img7.webp"
    },
    {
      id:11,
      itemName:"Mango",
      itemPrice:300,
      itemImg:"assets/img/img8.jpg"
    },
    {
      id:12,
      itemName:"Pumpkin",
      itemPrice:60,
      itemImg:"assets/img/img9.webp"
    },
    {
      id:13,
      itemName:"Orange",
      itemPrice:99,
      itemImg:"assets/img/img10.jpg"
    },
    {
      id:14,
      itemName:"Pineapple",
      itemPrice:30,
      itemImg:"assets/img/img11.webp"
    },
    {
      id:15,
      itemName:"Beans",
      itemPrice:40,
      itemImg:"assets/img/img12.webp"
    },
    {
      id:16,
      itemName:"Raddish",
      itemPrice:30,
      itemImg:"assets/img/img13.webp"
    },
    {
      id:17,
      itemName:"Carrot",
      itemPrice:40,
      itemImg:"assets/img/img14.webp"
    },
   
    {
      id:18,
      itemName:"Pea",
      itemPrice:35,
      itemImg:"assets/img/img16.webp"
    },
    {
      id:19,
      itemName:"Lemon",
      itemPrice:28,
      itemImg:"assets/img/img17.jpg"
    },
    {
      id:20,
      itemName:"Custord Apple",
      itemPrice:250,
      itemImg:"assets/img/img18.webp"
    },
    {
      id:21,
      itemName:"Cashew",
      itemPrice:634,
      itemImg:"assets/img/img19.jpg"
    },
    {
      id:22,
      itemName:"Capsicum",
      itemPrice:29,
      itemImg:"assets/img/img20.webp"
    },
    {
      id:23,
      itemName:"Broccoli",
      itemPrice:84,
      itemImg:"assets/img/img21.webp"
    },
    {
      id:24,
      itemName:"Jeera",
      itemPrice:99,
      itemImg:"assets/img/img22.jpg"
    },
    {
      id:25,
      itemName:"Banana",
      itemPrice:50,
      itemImg:"assets/img/img23.jpg"
    },
    {
      id:26,
      itemName:"Moong dal",
      itemPrice:180,
      itemImg:"assets/img/img24.webp"
    },
   
    {
      id:27,
      itemName:"Green gram",
      itemPrice:150,
      itemImg:"assets/img/img26.webp"
    },
    {
      id:28,
      itemName:"Green Chilli",
      itemPrice:20,
      itemImg:"assets/img/img27.webp"
    },
    
    {
      id:29,
      itemName:"Apple",
      itemPrice:280,
      itemImg:"assets/img/img29.jpg"
    },
    {
      id:30,
      itemName:"Peanuts",
      itemPrice:400,
      itemImg:"assets/img/img30.jpg"
    },
    {
      id:31,
      itemName:"Cucumber",
      itemPrice:79,
      itemImg:"assets/img/img32.jpg"
    },
   
    {
      id:32,
      itemName:"Baddam",
      itemPrice:550,
      itemImg:"assets/img/img34.jpg"
    },
    {
      id:33,
      itemName:"Raw Mango",
      itemPrice:290,
      itemImg:"assets/img/img35.jpg"
    },
    {
      id:34,
      itemName:"Corn",
      itemPrice:192,
      itemImg:"assets/img/img36.jpg"
    },
    {
      id:35,
      itemName:"Oil",
      itemPrice:650,
      itemImg:"assets/img/img37.jpg"
    },
    {
      id:36,
      itemName:"Chocobar",
      itemPrice:25,
      itemImg:"assets/img/img38.jpg"
    },
    {
      id:37,
      itemName:"Groundnut",
      itemPrice:150,
      itemImg:"assets/img/img39.jpg"
    },
    {
      id:38,
      itemName:"Beetroot",
      itemPrice:99,
      itemImg:"assets/img/img40.webp"
    },
    {
      id:39,
      itemName:"Pista",
      itemPrice:720,
      itemImg:"assets/img/img41.jpg"
    },
    {
      id:40,
      itemName:"Pappaya",
      itemPrice:49,
      itemImg:"assets/img/img42.jpg"
    },
    {
      id:41,
      itemName:"Mustard Seeds",
      itemPrice:350,
      itemImg:"assets/img/img43.jpg"
    },
    {
      id:42,
      itemName:"Kiwi",
      itemPrice:139,
      itemImg:"assets/img/img44.jpg"
    },
    {
      id:43,
      itemName:"Lady'sfinger",
      itemPrice:99,
      itemImg:"assets/img/lady'sfinger.webp"
    },
    {
      id:44,
      itemName:"Mirchipowder",
      itemPrice:200,
      itemImg:"assets/img/mirchipowder.jpg"
    },
    {
      id:45,
      itemName:"Rice",
      itemPrice:1200,
      itemImg:"assets/img/rice.webp"
    },
    {
      id:46,
      itemName:"RedMirchi",
      itemPrice:299,
      itemImg:"assets/img/redmirchi.webp"
    },
    {
      id:47,
      itemName:"Paneer",
      itemPrice:189,
      itemImg:"assets/img/panner.jpg"
    },
    {
      id:48,
      itemName:"Beans",
      itemPrice:40,
      itemImg:"assets/img/img12.webp"
    }
  ]
 

}
