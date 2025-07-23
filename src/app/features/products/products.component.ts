import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Books'];

products = [
  {
    name: 'Wireless Headphones',
    price: 49.99,
    image: 'https://image-us.samsung.com/SamsungUS/home/harman-kardon/jbl-harman-kardon/headphones/jbllive660ncblkam/JBLLIVE660NCBLK_001_Front_Black.png?$product-details-jpg$'
  },
  {
    name: 'Classic T-Shirt',
    price: 19.99,
    image: 'https://m.media-amazon.com/images/I/61RxijmtU7L._AC_SX679_.jpg'
  },
  {
    name: 'Modern Chair',
    price: 129.99,
    image: 'https://cdn.roveconcepts.com/sites/default/files/styles/picture_1024_2x/public/Tola_Lounge_Chair_Venice_Vegan_Suede_1.jpg'
  },
  {
    name: 'Cooking Pan Set',
    price: 89.99,
    image: 'https://www.greenpan.us/cdn/shop/files/NCCC008372-001_2_OPRAH.jpg?v=1736796004'
  },
  {
    name: 'Bookshelf Organizer',
    price: 34.99,
    image: 'https://images.thdstatic.com/productImages/90657f23-587c-45b2-bd85-4573b5608c36/svn/white-bookcases-bookshelves-tjhd-xk00122-m-31_1000.jpg'
  },
  {
    name: 'Bluetooth Speaker',
    price: 59.99,
    image: 'https://assets.bosecreative.com/transform/2d72917c-cf20-42d3-b4f4-27a051fa4b17/SLFBS_BoseBlk_001_RGB?io=width:816,height:667,transform:fit&io=width:816,height:667,transform:fit'
  }
];


addToCart(product: any){

}


}
