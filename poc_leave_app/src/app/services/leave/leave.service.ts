import { Injectable } from '@angular/core';
import { Leave } from 'src/app/models/leave.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  private dbPath = '/leave_db';

  leaveRef: AngularFirestoreCollection<Leave>;

  constructor(private db: AngularFirestore) {
    this.leaveRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Leave> {
    return this.leaveRef;
  }

  create(leave: Leave): any {
    return this.leaveRef.add({ ...leave });
  }
}
