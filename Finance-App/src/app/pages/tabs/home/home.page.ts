import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  account : any[] = [];
bannerConfig: any;
  constructor() { }

  ngOnInit() {
    this.account = [
    {id: 1, acc_no: '125487896532', balence: '20000'},
    {id: 2, acc_no: '1254878432', balence: '205200'},
    {id: 3, acc_no: '12545296532', balence: '920000'}
    ];
  }



}
