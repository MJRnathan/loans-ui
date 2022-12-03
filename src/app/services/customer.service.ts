import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  getCustomers() {
    let url =
      environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_ALL_CUSTOMERS;
    return this.httpClient.get(url);
  }

  viewCustomer(id: string) {
    let url =
      environment.CUSTOMER_BASE_URL +
      environment.CUSTOMER.GET_CUSTOMER +
      '/' +
      id;
    console.log('viewCustomer id:' + url);
    console.log('Https the Client' + url);
    return this.httpClient.get(url);
  }

  editCustomer() {}

  deleteCustomer() {}

  searchCustomer() {}
}
