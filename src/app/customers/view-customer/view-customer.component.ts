import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
})
export class ViewCustomerComponent implements OnInit {
  customerId: string = '';
  customerDetails: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      this.customerId = data.id;
      console.log('customerIds=' + this.customerId);
    });

    this.customerService.viewCustomer(this.customerId).subscribe((data) => {
      this.customerDetails = data;
      console.log(this.customerDetails);
    });
  }
}
