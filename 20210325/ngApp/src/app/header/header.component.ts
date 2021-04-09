import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', //组件应用标签名
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
