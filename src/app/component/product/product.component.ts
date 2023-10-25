import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartserviceService } from 'src/app/cartservice.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productArray : any
  public totalItem : number=1;

  constructor (private getApi:ApiserviceService,private router:Router,private route:ActivatedRoute, private cartservice:CartserviceService){}
  add(){
    this.router.navigate(['/signup']);
  
  }
  cart(){
    this.router.navigate(['/cart']);
  
  } 
  ngOnInit(){
    this.getApi.getPost().subscribe((res)=>{
      this.productArray=res
      // console.log(this.productArray);
      this.productArray.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
      

      
      // console.log(localStorage.getItem('hh'))
    })

  }
  addtocart(i:any){
   this.cartservice.addtoCart(i);
   this.totalItem= this.cartservice.cartCount
   
  }
  
}
