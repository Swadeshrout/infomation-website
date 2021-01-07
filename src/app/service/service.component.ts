import { Component, OnInit } from '@angular/core';
import { single } from '../data';

@Component ({
    selector: 'service-component',
    templateUrl: './service.component.html',
    styleUrls: [`./service.component.css`]
})

export class ServiceComponent implements OnInit {
    public title: string;
    public isAMCActive: boolean = true;
    public isResidentailActive: boolean = false;
    public single: any[];

    view: any[] = [700, 400];

    // option
    gradient: boolean = true;
    showLegend: boolean = false;
    showLabels: boolean = true;
    isDoughnut: boolean = false;

    colorScheme = {
        domain: ['#7cb6ec', '#434348', '#90ed7d', '#f7a25c' , '#8085e9' , '#f15c7f']
    };

    ngOnInit() {
        this.title = 'Service';
        this.getData();
    }

    onClickEvent(actionType) {
        if (actionType == 'AMC') {
            this.isAMCActive = true;
            this.isResidentailActive = false;
                this.getData();

        } else if (actionType == 'RES') {
            this.isAMCActive = false;
            this.isResidentailActive = true;
            this.single = [];
        }
    }

    getData() {
        Object.assign(this, { single });
    }
}