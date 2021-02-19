import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Complaint} from './complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http: HttpClient) { }
  getComplaints(): Observable<Complaint[]>{
  	return this.http.get<Complaint[]>('http://localhost:3000/api/complaints');
  }

  deleteComplaint(id:any): Observable<Complaint[]>{
    return this.http.delete<Complaint[]>('http://localhost:3000/api/complaint/' + id);
  }

  addComplaint(newComplaint:any): Observable<any>{
    if (!newComplaint.name) {
      newComplaint.name = 'undefined';
    }
    if (!newComplaint.rollno) {
      newComplaint.rollno = 'undefined';
    }
    if (!newComplaint.branch) {
      newComplaint.branch= 'undefined';
    }
    if (!newComplaint.division) {
      newComplaint.division= 'undefined';
    }
    if (!newComplaint.complaint_type) {
      newComplaint.complaint_type= 'undefined';
    }
    if (!newComplaint.complaint_desc) {
      newComplaint.complaint_desc= 'undefined';
    }

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json'); // for setting format
    return this.http.post('http://localhost:3000/api/complaint', newComplaint, { headers: headers });
  }

}
