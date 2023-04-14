import { Component, OnInit } from '@angular/core';
import { HomeService } from '../_service/home.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model: any = {};
  services = ['Website Services', 'Marketing',
    'Other'];

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
  }

  onSubmit(subject, name, replyto, message): void {
    this.homeService.submitForm(subject, name, replyto, message);
  }
}
