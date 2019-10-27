import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../shared/services/customer.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  id: number;
  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    type: new FormControl('')
  });

  constructor(  private route: ActivatedRoute,
                private router: Router,
                private customerService: CustomerService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(this.id)
      .subscribe(cusFromRes => {
        this.customerForm.patchValue( {firstName: cusFromRes.firstName,
          lastName: cusFromRes.lastName});
        });
}

  save() {
    const customer = this.customerForm.value;
    customer.id = this.id;
    this.customerService.updateCustomer(customer).subscribe(cusUpdated => {
      this.router.navigateByUrl('/customers');
    });
  }


}
