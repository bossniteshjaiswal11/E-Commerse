import { Component, Host, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/layouts/header/header.component";
import { FooterComponent } from "./shared/layouts/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, HeaderComponent, RouterLink, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  screenHeight:any;
  screenWidth:any;
  footerMaxHeight!:number;
  title = 'e-commerse';

  constructor(){
    this.getScreenSize(event);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event:any){
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    //console.log(this.screenHeight, this.screenWidth)
    this.footerMaxHeight = this.screenHeight -160;
  }
}
