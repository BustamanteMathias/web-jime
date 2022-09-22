import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-home',
  templateUrl: './spinner-home.component.html',
  styleUrls: ['./spinner-home.component.scss']
})
export class SpinnerHomeComponent implements OnInit {

  stateSpinner: boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.stateSpinner = false;
    }, 3000);
  }

}
