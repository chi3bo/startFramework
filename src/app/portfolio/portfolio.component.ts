import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgList: string[] = [
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png',
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png',
  ]

  mySrc: String = ''

  showModal(e: any, im: HTMLDivElement): void {
    this.mySrc = e.target.closest(".innerItem").children[0].src
    im.classList.remove('d-none')
  }

  hideMe(e:any , im: HTMLDivElement){

    if (e.target == im){
      im.classList.add('d-none')
    }
    
  }

}
