import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/models/leave.model';
import { LeaveService } from 'src/app/services/leave/leave.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-leaves',
  templateUrl: './view-leaves.page.html',
  styleUrls: ['./view-leaves.page.scss'],
})
export class ViewLeavesPage implements OnInit {
  leaves?: Leave[];
  constructor(private leaveSer: LeaveService, private router: Router) {}

  ngOnInit() {
    this.getLeaves();
  }

  goBack() {
    this.router.navigate(['leave-request']);
  }

  getLeaves(): void {
    this.leaveSer
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.leaves = data;
      });
  }
}
