import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navigation.html',
})
export class NavComponent implements OnInit {
  title: string = '';

  ngOnInit(): void {}
}
