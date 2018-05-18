import { Component } from '@angular/core';
import { AppPageHeaderService, PageHeaderButton } from '../app-page-header/app-page-header.service';

@Component({
    selector: 'app-dvr',
    templateUrl: './dvr.component.html',
    styleUrls: [ './dvr.component.css' ]
})
export class DVRComponent {

    public static readonly PAGE_HEADER_TITLE: string = 'DVR';
    public static readonly PAGE_HEADER_BUTTONS: PageHeaderButton[] = [];

    public constructor(private pageHeaderService: AppPageHeaderService) {

        pageHeaderService.setValues(DVRComponent.PAGE_HEADER_TITLE, DVRComponent.PAGE_HEADER_BUTTONS);

    }

}
