import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-age-determination',
  templateUrl: './age-determination.page.html',
  styleUrls: ['./age-determination.page.scss'],
})
export class AgeDeterminationPage {
  name: string = '';
  age: number = 0;
  ageMessage: string = '';

  constructor(private http: HttpClient) {}

  determineAge() {
    this.http.get(`https://api.agify.io/?name=${this.name}`)
      .subscribe((data: any) => {
        this.age = data.age;

        if (this.age < 18) {
          this.ageMessage = 'Eres joven';
        } else if (this.age >= 18 && this.age < 60) {
          this.ageMessage = 'Eres adulto';
        } else {
          this.ageMessage = 'Eres anciano';
        }
      });
  }
}