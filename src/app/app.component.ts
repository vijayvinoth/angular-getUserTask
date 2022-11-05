import { Component } from '@angular/core';
import { AppService } from './app.services';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'User';
  firstArgument = [];
  secondArgument = [];
  thirdArgument = [];

  constructor(private readonly apiService: AppService) {}

  ngOnInit(): void {
    this.getUsers(1);
    this.getUsers(3);
    this.getUsers(10);
  }

  getUsers(id) {
    this.apiService.getUser(id).subscribe((resp: any) => {
      if (id == 1) {
        this.firstArgument = resp.data;
      }
      if (id == 3) {
        this.secondArgument = resp.data;
      }
      if (id == 10) {
        this.thirdArgument = resp.data;
      }
    });
  }
}
