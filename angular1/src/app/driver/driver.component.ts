import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Driver } from '../module/klasa';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent{


@Input()
vozac:Driver = {} as Driver;

@Input()
reden:Number = 0;


@Output()
cuci = new EventEmitter<any>();

clicked = false;
klasi(){
  var zname;
  if(this.vozac.category=="begginer")
  zname=true;
  else
  zname=false;
  return {'poz':zname,'course-card':true}

}
klik(){
  this.clicked=!this.clicked;
  var link=this.vozac.iconUrl;
  window.open(link,"_blank");
  this.cuci.emit(this.vozac);
}

funkcija(){
  if(this.clicked){
    return {'background-color':'red'};
  }else{
    return {'background-color':'blue'};
  }

}
}
