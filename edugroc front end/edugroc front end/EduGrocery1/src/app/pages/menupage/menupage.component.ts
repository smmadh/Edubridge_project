import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Payuser } from '../../payuser';
import { OrderDetailsService } from '../../services/order-details.service';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrl: './menupage.component.css'
})

 export class MenupageComponent implements OnInit {

    constructor(private param:ActivatedRoute,private service:OrderDetailsService,private paymentservice:PaymentService) { }
    getMenuId:any;
    menuData:any;
  
    ngOnInit(): void {
      this.getMenuId = this.param.snapshot.paramMap.get('id');
      console.log(this.getMenuId,'getmenu');
      if(this.getMenuId)
      {
        this.menuData =  this.service.itemDetails.filter((value)=>{
            return value.id == this.getMenuId;
          });
          console.log(this.menuData,'menudata>>');
          
      }
}
// back end for payment
puser:Payuser= new Payuser();
  
paymentuser(){
  console.log(this.puser);
  this.paymentservice.registerUser(this.puser).subscribe(data=>{
    alert("Successfully user is ordered")
  },
  error=>("sorry user is not ordered") );
}

}