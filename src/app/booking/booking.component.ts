import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  contactForm: FormGroup;
  model: any = {};
  services = ['Website Services', 'Marketing',
    'Other'];
  disabledSubmitButton = true;
  constructor() { }

  ngOnInit(): void {
  }

}
