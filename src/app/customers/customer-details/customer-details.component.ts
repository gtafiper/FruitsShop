import { Component, OnInit } from '@angular/core';
import {Customer} from '../../shared/models/customer';
import {CustomerService} from '../../shared/services/customer.service';
import {ActivatedRoute} from '@angular/router';
import {Orders} from '../../shared/models/Order';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;
  orders: Orders[];
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id)
      .subscribe(customerFromRestAPI =>{ this.customer = customerFromRestAPI;
      });
  }

}
