import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
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

  getUniversityByNameAndOfsset(name: string, offset: number): Observable<University[]> {
    return this.http.get<University[]>(`${this.baseurl}/search?name=${name}`).pipe(map((universities: University[]) => {
        return universities.slice(offset);
      })
    );
  }

  getUniversityByNameAndLimit(name: string, limit: number, offset: number): Observable<University[]> {
    return this.http.get<University[]>(`${this.baseurl}/search?name=${name}`).pipe( map((universities: University[]) => {
        return universities.slice(offset, offset + limit);
      })
    );
  }
}


