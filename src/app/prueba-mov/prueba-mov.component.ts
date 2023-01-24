import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-mov',
  templateUrl: './prueba-mov.component.html',
  styleUrls: ['./prueba-mov.component.scss']
})
export class PruebaMovComponent implements OnInit {

  constructor() { }

  soyMovile: boolean= false;

  ngOnInit(): void {
    if(window.screen.width <= 720){
      console.log("prueba")
      this.soyMovile = true;
    }else{
      this.soyMovile = false;
    }
  }

}
