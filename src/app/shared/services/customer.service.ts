import { Injectable } from '@angular/core';
import {Customer} from '../models/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[];
  id = 1;
  apiUrl = 'http://fruitshop.azurewebsites.net/api/Customer';

  constructor(private http: HttpClient) { this.customers  = [{id: this.id++ , firstName: 'kghsd', lastName: 'sdv' }]; }

  getCustomers(): Observable<Customer[]> {
   return  this.http.get<Customer[]> (this.apiUrl);
  }

  // tslint:disable-next-line:no-shadowed-variable
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);

  }

  updateCustomer(customer: Customer): Observable<Customer> {
  return this.http.put<Customer>(this.apiUrl + '/' + customer.id, customer);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.apiUrl + '/' + id);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);


  }
}
