import { Component, OnInit } from '@angular/core';
import {Complaint} from '../complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ComplaintService]
})
export class DashboardComponent implements OnInit {
  complaint!: Complaint;
  complaints!: Complaint[];
  constructor(private complaintService: ComplaintService) { }

  ngOnInit(): void {
  	this.getComplaints();
  }

  getComplaints(){
  	this.complaintService.getComplaints()
  	.subscribe((complaints: Complaint[]) =>
  		this.complaints = complaints
  	);
  }

  deleteComplaint(id: any) {
    const complaints = this.complaints;
    // Here we call our service again
    this.complaintService.deleteComplaint(id)
        .subscribe(suc => { 
            for (let i = 0; i < complaints.length; i++) {
              if (complaints[i]._id == id) { 
                complaints.splice(i, 1);
              }
            }
         // }
        });
  }

}
