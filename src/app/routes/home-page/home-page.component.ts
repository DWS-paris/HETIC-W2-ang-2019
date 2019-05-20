import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user/user.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [ UserService ]
})
export class HomePageComponent implements OnInit {

  public userCollection: any;

  constructor(
    private UserService: UserService
  ) { }

  private getUserList = () => {
    this.UserService.readAllItems()
  .then( data => this.userCollection = data )
  .catch( err => console.error(err) )

  }

  ngOnInit() {
    this.getUserList()
  }

}
