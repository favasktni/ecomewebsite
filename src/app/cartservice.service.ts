import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
   
  public cartCount : number=0
  public cartItemlist :any =[]
  public productList = new BehaviorSubject<any>([])

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }
  setProducts(product:any){
    this.cartItemlist.push(...product);
    this.productList.next(product)
  }
  addtoCart(product:any){
   
    this.cartCount=this.cartItemlist.length

    if (!this.cartItemlist.includes(product)) {
      this.cartItemlist.push(product);
    }
    else{
      console.log(false);
      
    }
        
    this.productList.next(this.cartItemlist);
    this. getTotalPrice(); 
    console.log(this.cartItemlist);


  }
  getTotalPrice():any{
    let grandTotal =0;
    this.cartItemlist.map((a:any)=>{
      grandTotal += a.total;
      return grandTotal;
    }) 
  }
  removeCartitem(product:any){
    this.cartItemlist.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemlist.splice(index,1);
      }
    })
  }
  // removeAllcart(){
  //   this.cartItemlist=[];
  //   this.productList.next(this.cartItemlist) 
  // }
}
