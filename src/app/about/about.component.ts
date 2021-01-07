import { Component, OnInit } from '@angular/core';

@Component ({
    selector: 'about-component',
    templateUrl: './about.component.html',
    styleUrls: [`./about.component.css`]
})

export class AboutComponent implements OnInit {
    public title: string;
    ngOnInit() {
        this.title = 'About';
    }
}