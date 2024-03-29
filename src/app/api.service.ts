import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { University } from './University';

@Injectable({
providedIn: 'root',
})

export class APIService{
  public baseurl = 'http://universities.hipolabs.com';
  constructor(private http: HttpClient){}
  getUniversitybyname(name: string) : Observable<University>{
    return this.http.get<University>(this.baseurl +"/search?name="+name);
  }

  getUniversitybyCountry(Country: string) : Observable<University>{
    return this.http.get<University>(this.baseurl +"/search?country="+Country);
  }
  
  getUniversitybynameAndCountry(name : string , Country: string) : Observable<University>{
    return this.http.get<University>(this.baseurl +"/search?name="+name+"&country="+Country);
  }
}

