import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

   products = [
  {
    id: 1,
    name: 'Laptop',
    description: 'Powerful gaming laptop',
    price: 1200,
    category: 'Electronics',
    imageUrl: 'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg'
  },
  {
    id: 2,
    name: 'Laptop',
    description: 'Powerful gaming laptop',
    price: 1200,
    category: 'Electronics',
    imageUrl: 'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg'
  },
  {
    id: 3,
    name: 'Laptop',
    description: 'Powerful gaming laptop',
    price: 1200,
    category: 'Electronics',
    imageUrl: 'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg'
  },
  {
    id: 4,
    name: 'Laptop',
    description: 'Powerful gaming laptop',
    price: 1200,
    category: 'Electronics',
    imageUrl: 'https://thumbs.dreamstime.com/b/laptop-front-view-realistic-laptop-front-view-vector-illustration-d-computer-notebook-empty-screen-isolated-white-142569830.jpg'
  },
];


}
