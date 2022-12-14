import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css'],
})
export class ListCustomersComponent implements OnInit {
  customerResult: any;
  customerList: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList() {
    this.customerService.getCustomers().subscribe((data) => {
      this.customerResult = data;
      this.customerList = this.customerResult.results;
      console.log(this.customerList);
    });
  }
}
