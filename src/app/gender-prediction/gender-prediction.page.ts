import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gender-prediction',
  templateUrl: './gender-prediction.page.html',
  styleUrls: ['./gender-prediction.page.scss'],
})
export class GenderPredictionPage {
  name: string = '';
  gender: string = '';

  constructor(private http: HttpClient) {}

  predictGender() {
    this.http.get(`https://api.genderize.io/?name=${this.name}`)
      .subscribe((data: any) => {
        this.gender = data.gender;
      });
  }
}

