import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products=[
    {
      name:'smart phone',
      description:'good phone',
      price:15999,
      image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSctMUh0dnXK-E-CZOcPir3h0MHSQsh26g-ogh8rScZvktjodsOBtfqlk0yDMN-d01AyWYxeHXSfAHi7vMAX1R7d-YxMyZ6Jqe65ixBQN7DGlShVSNgmqPVAQ'

    },
     {
      name:'smart phone',
      description:'good phone',
      price:15999,
      image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSctMUh0dnXK-E-CZOcPir3h0MHSQsh26g-ogh8rScZvktjodsOBtfqlk0yDMN-d01AyWYxeHXSfAHi7vMAX1R7d-YxMyZ6Jqe65ixBQN7DGlShVSNgmqPVAQ'

    },
     {
      name:'smart phone',
      description:'good phone',
      price:15999,
      image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSctMUh0dnXK-E-CZOcPir3h0MHSQsh26g-ogh8rScZvktjodsOBtfqlk0yDMN-d01AyWYxeHXSfAHi7vMAX1R7d-YxMyZ6Jqe65ixBQN7DGlShVSNgmqPVAQ'

    },
     {
      name:'smart phone',
      description:'good phone',
      price:15999,
      image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSctMUh0dnXK-E-CZOcPir3h0MHSQsh26g-ogh8rScZvktjodsOBtfqlk0yDMN-d01AyWYxeHXSfAHi7vMAX1R7d-YxMyZ6Jqe65ixBQN7DGlShVSNgmqPVAQ'

    }
  ];

constructor(private route:Router){}

productDetails(){
this.route.navigate(['/productDetails'])
}
}
