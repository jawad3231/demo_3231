import { Component } from '@angular/core';
import { findIndex, map, repeat } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberArr = ["1 2 -3 4 5"];

  
  accum(str: string) {
   let numArr=str.split(' ').map(Number)
   let smallNumArr=Math.min.apply(null, numArr).toString()
   let bigNumArr=Math.max.apply(null, numArr).toString()
    return bigNumArr + " " + smallNumArr
    // console.log(numArr)
  }
  // accum(str: string) {
  //   let getIntegers=str.length
  //   let arrData=Array.from({ length: getIntegers }, () => str) 
  //   console.log(arrData.map((val,index)=>val.charAt(index).toLocaleUpperCase()),'UPPER case Data')
  //   console.log(arrData.map((val,index)=>val.slice(index+1)))
  // }
  






}
