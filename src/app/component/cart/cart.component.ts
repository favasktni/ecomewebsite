import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { CartserviceService } from 'src/app/cartservice.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  public products :any=[];
  public grandTotal : number=0;

   constructor(private router:Router,private route:ActivatedRoute,private cartservice:CartserviceService){}
   shop(){
    this.router.navigate(['/product']);
   
  
  }
  ngOnInit(): void {
    this.cartservice.getProducts().subscribe(res=>{
     this.products=res
    //  console.log(res);
     
    //  this.grandTotal= this.cartservice.getTotalPrice();
     
    })
  }
  removeItems(items:any){
   this.cartservice.removeCartitem(items)
  }
  // removeAllitem(){
  //   this.cartservice.removeAllcart();
  // }
}



