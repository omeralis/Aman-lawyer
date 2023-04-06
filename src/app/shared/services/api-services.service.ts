import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }
  private apiUrl = environment.apiUrl;
  // public HeaderSubject = new Subject<boolean>();
  public HeaderSubject = new BehaviorSubject<boolean>(false);
  ApiRoutes = {
    contact:{
        get:  'contact',
        add:  'contact',
    },
    client:{
      get:  'client',
      add:  'client',
  }
  }
  // get data of Contact
  getContact() {
    return this.http.get(this.apiUrl + this.ApiRoutes.contact.get);
  }
  // add new Contact
  addContact(data: any) {
    return this.http.post(this.apiUrl + this.ApiRoutes.contact.add, data);
  }
  // get data of Client
  getClient() {
    return this.http.get(this.apiUrl + this.ApiRoutes.client.get);
  }
}
