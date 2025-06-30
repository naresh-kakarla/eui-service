import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsService } from 'src/app/core/services/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product:any;

 

  constructor(private productService:ProductDetailsService , private router:Router){}
  ngOnInit(): void {
 this.product=this.productService.getSelectedProduct()

 if(!this.product){
this.router.navigate(['/'])  
 }
  }
   otherDetaiils=[
    {
      
    }
   ]

   
}
