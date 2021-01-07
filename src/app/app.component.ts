import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public altLogo = 'sybery';
  public isHomeActive = true;
  public isServiceActive = false;
  public isPortfolioActive = false;
  public isAboutActive = false;
  public isContactActive = false;

  ngOnInit() {

  }

  ScrollIntoView(elem: string , navType: string) {
    if (navType == 'home') {
      this.isHomeActive = true;
      this.isServiceActive = false;
      this.isPortfolioActive = false;
      this.isAboutActive = false;
      this.isContactActive = false;

    } else if (navType == 'service') {
      this.isHomeActive = false;
      this.isServiceActive = true;
      this.isPortfolioActive = false;
      this.isAboutActive = false;
      this.isContactActive = false;

    } else if (navType == 'portfolio') {
      this.isHomeActive = false;
      this.isServiceActive = false;
      this.isPortfolioActive = true;
      this.isAboutActive = false;
      this.isContactActive = false;

    } else if (navType == 'about') {
      this.isHomeActive = false;
      this.isServiceActive = false;
      this.isPortfolioActive = false;
      this.isAboutActive = true;
      this.isContactActive = false;

    } else if (navType == 'contact') {
      this.isHomeActive = false;
      this.isServiceActive = false;
      this.isPortfolioActive = false;
      this.isAboutActive = false;
      this.isContactActive = true;
    }

    document.querySelector(elem).scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
  }
}
