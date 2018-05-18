import { Component } from '@angular/core';
import { AppPageHeaderService, PageHeaderButton } from '../app-page-header/app-page-header.service';

@Component({
    selector: 'app-viewer',
    templateUrl: './viewer.component.html',
    styleUrls: [ './viewer.component.css' ]
})
export class ViewerComponent {

    public static readonly PAGE_HEADER_TITLE: string = 'Camera Feeds';
    public static readonly PAGE_HEADER_BUTTONS: PageHeaderButton[] = [];

    public constructor(private pageHeaderService: AppPageHeaderService) {

        pageHeaderService.setValues(ViewerComponent.PAGE_HEADER_TITLE, ViewerComponent.PAGE_HEADER_BUTTONS);

    }

}
