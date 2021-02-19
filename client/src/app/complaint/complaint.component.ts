import { Component, OnInit } from '@angular/core';
import {Complaint} from '../complaint';
import { ComplaintService } from '../complaint.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css'],
  providers: [ComplaintService]
})
export class ComplaintComponent implements OnInit {
  complaint!: Complaint;
  complaints!: Complaint[];
  name!: string;
  rollno!: string;
  branch!: string;
  division!: string;
  complaint_type!: string;
  complaint_desc!: string;
  angForm!: FormGroup;
  submitted = false;
  constructor(private complaintService: ComplaintService, private fb: FormBuilder) { }

  addComplaint() {
    this.submitted = true;
        // stop here if form is invalid
    if (this.angForm.invalid) {
      return;
    }

    const newComplaint = {
      name: this.angForm.value.name,
      rollno: this.angForm.value.rollno,
      branch: this.angForm.value.branch,
      division: this.angForm.value.division,
      complaint_type: this.angForm.value.complaint_type,
      complaint_desc: this.angForm.value.complaint_desc
    };
    // Now we need to provide this contact that is created to contact.service
    this.complaintService.addComplaint(newComplaint)
            .subscribe( (complaint:Complaint) => { 
              this.complaints.push(this.complaint); 
              this.complaintService.getComplaints()
                  .subscribe( (complaints: Complaint[]) => 
                  this.complaints = complaints); 
                });
  }

  ngOnInit(): void {
  	this.angForm = this.fb.group({
      name: ['', Validators.required ],
      rollno: ['', Validators.required ],
      branch: ['', Validators.required ],
      division: ['', Validators.required ],
      complaint_type: ['', Validators.required ],
      complaint_desc:['',Validators.required]
    });
    this.complaintService.getComplaints()
        .subscribe( (complaints: Complaint[]) => // Here we are typecasting contacts which is an object to 'Contact[]' array
            this.complaints = complaints);
  }

  

}
