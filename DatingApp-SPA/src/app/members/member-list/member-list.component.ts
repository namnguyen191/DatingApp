import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'];
      //this.shuffleArray(this.users);
    });
  }

  // shuffleArray(array) {
  //   for (let i = array.length-1; i >0; i--) {
  //      let j = Math.floor(Math.random() * (i + 1));
  //      let temp = array[i];
  //       array[i] = array[j];
  //       array[j] = temp;
  //   }
  // }

  // loadUsers(){
  //   this.userService.getUsers().subscribe((users: User[]) => {
  //     this.users = users;
  //   }, error =>  {
  //     this.alertify.error(error);
  //   });
  // }

}
