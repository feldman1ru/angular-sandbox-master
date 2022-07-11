import { Component, NgModule, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})

export class BindingComponent implements OnInit {
  figcaption = "blue claud";
  text:string ="";
  isHiden: boolean = false;
  image: { url: string; alt: string } = {
    url: 'https://cdn.pixabay.com/photo/2022/06/09/10/13/beach-7252178_960_720.jpg',
    alt: 'beach-social-media',
  };
  
  constructor() { }

  ngOnInit(): void {
  }
  
  toggle(){
    this.isHiden = !this.isHiden
  }
  
}
