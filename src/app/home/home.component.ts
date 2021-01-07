import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
// For MDB Angular Free

@Component ({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: [`./home.component.css`],
    animations: [
        trigger('fade', [
            transition('void => *', [style({ opacity: 0 }), animate('1000ms', style({ opacity: 1 }))]),
            transition('* => void', [style({ opacity: 1 }), animate('1000ms', style({ opacity: 0 }))]),
          ])
    ]
})

export class HomeComponent implements OnInit {

    public title: string;
    public current = 0;

    public img_list = [
        '../../assets/images/s1.png',
        '../../assets/images/s2.jpg',
        '../../assets/images/s3.jpg',
    ];

    ngOnInit() {
       this.title = 'Sybery';
       setInterval(() => {
        this.current = ++this.current % this.img_list.length;
      }, 3000);
    }

    constructor() {
    }


}