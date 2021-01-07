import { Component, OnInit } from '@angular/core';

@Component ({
    selector: 'portfolio-component',
    templateUrl: './portfolio.component.html',
    styleUrls: [`./portfolio.component.css`]
})

export class PortfolioComponent implements OnInit {
    public title: string;
    ngOnInit(){
        this.title = 'Portfolio'
    }
}