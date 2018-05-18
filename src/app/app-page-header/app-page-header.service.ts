import { Injectable } from '@angular/core';

export class PageHeaderButton {

    public title: string;
    public link: string;
    public icon: string;

    public constructor(title: string, link?: string, icon?: string) {

        this.title = title;
        this.link = link;
        this.icon = icon;

    }

}

@Injectable({
    providedIn: 'root'
})
export class AppPageHeaderService {

    public headerTitle: string;
    public buttons: PageHeaderButton[];

    public constructor() {

    }

    public setValues(title: string, buttons?: PageHeaderButton[]) {

        this.headerTitle = title;
        this.buttons = buttons;

    }

}
