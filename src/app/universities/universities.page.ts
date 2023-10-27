import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.page.html',
  styleUrls: ['./universities.page.scss'],
})
export class UniversitiesPage {
  countryName: string = '';
  universities: any[] = [];

  constructor(private http: HttpClient) {}

  searchUniversities() {
    this.http.get(`http://universities.hipolabs.com/search?country=${this.countryName}`)
      .subscribe((data: any) => {
        this.universities = data;
      });
  }
}

