import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members$: Observable<Member[]>;
  constructor(private memberServices: MembersService) { }

  ngOnInit(): void {
    this.members$ = this.memberServices.getMembers();

  }

  // loadMembers() {
  //   this.memberServices.getMembers().subscribe(members => {
  //     this.members = members;
  //   })
  // }
}
