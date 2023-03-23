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

  ngOnInit(): void {
    window.onload = function () {
      //Disable past dates for verification
      let today = new Date().toISOString().split('T')[0];
      let startRef = document.getElementById('startDate') as HTMLInputElement;
      let endRef = document.getElementById('endDate') as HTMLInputElement;
      startRef.setAttribute('min', today);
      endRef.setAttribute('min', today);
    };
  }

  saveTutorial(): void {
    // variables
    let fName = document.getElementById('Fname') as HTMLInputElement;
    let lName = document.getElementById('Lname') as HTMLInputElement;
    let type = document.getElementById('type') as HTMLSelectElement;
    let startDate = document.getElementById('startDate') as HTMLInputElement;
    let endDate = document.getElementById('endDate') as HTMLInputElement;
    let reason = document.getElementById('reason') as HTMLTextAreaElement;
    let daysLeft = document.getElementById('daysLeft') as HTMLInputElement;
    let inputField = document.querySelectorAll('input');
    let days = 30;

    let startArr = startDate.value.split('-', 3);
    let endArr = endDate.value.split('-', 3);
    let startCount = 30 - parseInt(startArr[2]);
    let endCount = parseInt(startArr[2]);

    if (fName.value === '') {
      alert('first name can not be empty');
      fName.style.borderColor = 'red';
    } else if (lName.value === '') {
      alert('last name can not be empty');
      lName.style.borderColor = 'red';
    } else if (type.value === '') {
      alert('leave type must be selected');
      type.style.borderColor = 'red';
    } else if (startDate.value === '') {
      alert('please select a starting day');
      startDate.style.borderColor = 'red';
    } else if (endDate.value === '') {
      alert('please select a leave end day');
      endDate.style.borderColor = 'red';
    } else if (parseInt(endArr[0]) - parseInt(startArr[0]) > 1) {
      alert('Cannot pick date greater than 30 days');
    } else if (startCount + endCount > 30) {
      alert('Cannot pick date greater than 30 days');
    } else {
      for (let x = 0; x < inputField.length; x++) {
        inputField[x].style.borderColor = 'darkgrey';
      }

      this.leave_count = 30 - (30 - startCount) + endCount;
      this.leaveServ.create(this.leave).then(() => {
        window.alert('Created new item successfully!');
        this.submitted = true;
        this.leave_count = 30;
      });
    }
    // if ("" === "l") {
    //   window.alert('ss,dl');
    // } else {
    //   this.leaveServ.create(this.leave).then(() => {
    //     console.log('Created new item successfully!');
    //     this.submitted = true;
    //

    //   if (this.submitted) {
    //     window.setTimeout(() => {
    //       window.alert('all good');
    //     }, 300);
    //   }
    // }
  }

  goToViewPage() {
    this.router.navigate(['view-leaves']);
  }
}
