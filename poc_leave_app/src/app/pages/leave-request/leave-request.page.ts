import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Leave } from 'src/app/models/leave.model';
import { LeaveService } from 'src/app/services/leave/leave.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.page.html',
  styleUrls: ['./leave-request.page.scss'],
})
export class LeaveRequestPage implements OnInit {
  leave_count: number = 30;

  leave: Leave = new Leave();
  submitted = false;

  constructor(private leaveServ: LeaveService, private router: Router) {}

  ngOnInit(): void {}

  saveTutorial(): void {
    if (this.leave.first_name === '') {
      window.setTimeout(() => {
        window.alert('bad');
      }, 300);
    } else {
      this.leaveServ.create(this.leave).then(() => {
        console.log('Created new item successfully!');
        this.submitted = true;
      });

      if (this.submitted) {
        window.setTimeout(() => {
          window.alert('all good');
        }, 300);
      }
    }
  }

  goToViewPage() {
    this.router.navigate(['view-leaves']);
  }
}
