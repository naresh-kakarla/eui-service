import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetailsService } from 'src/app/core/services/product-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router, private productService: ProductDetailsService) { }

  products = [
    {
      id: '1',
      name: 'Laptop',
      description: 'Powerful gaming laptop',
      price: 1200,
      category: 'Electronics',
      imageUrl: 'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
      relativeImages: ['https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
        'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
        'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
        'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
      ]
    },
    {
      id: '2',
      name: 'Laptop',
      description: 'Powerful gaming laptop',
      price: 1200,
      category: 'Electronics',
      imageUrl: 'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
      relativeImages: ['https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
        'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
        'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
        'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg']
    },
    {
      id: '3',
      name: 'Laptop',
      description: 'Powerful gaming laptop',
      price: 1200,
      category: 'Electronics',
      imageUrl: 'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
      relativeImages: ['https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
        'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
        'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
        'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg']
    },
    {
      id: '4',
      name: 'Laptop',
      description: 'Powerful gaming laptop',
      price: 1200,
      category: 'Electronics',
      imageUrl: 'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
      relativeImages: ['https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
        'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
        'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
        'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg']
    },
    {
      id: '5',
      name: 'Laptop',
      description: 'Powerful gaming laptop',
      price: 1200,
      category: 'Electronics',
      imageUrl: 'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
      relativeImages: ['https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
        'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
        'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg',
        'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg']
    },
  ];

  onClick(id: any) {

    const productDetails = this.products.find(p => p.id === id)
    console.log('product==>', productDetails);

    if (productDetails) {
      this.productService.setSelectedProduct(productDetails)
      this.router.navigate(['/products', id])
    }


  }

}
