import { Component, OnInit } from '@angular/core';

@Component ({
    selector: 'contact-component',
    templateUrl: './contact.component.html',
    styleUrls: [`./contact.component.css`]
})

export class ContactComponent implements OnInit {
    public title: string;

    ngOnInit() {
        this.title = 'contact';
    }
}