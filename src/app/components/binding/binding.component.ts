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
    url: 'https://cdn.pixabay.com/photo/2022/06/23/12/58/clouds-7279751_960_720.jpg',
    alt: 'light clouds',
  };
  
  constructor() { }

  ngOnInit(): void {
  }
  
  toggle(){
    this.isHiden = !this.isHiden
  }
  
}
