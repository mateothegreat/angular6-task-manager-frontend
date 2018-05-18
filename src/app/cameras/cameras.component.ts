import { Component } from '@angular/core';
import { AppPageHeaderService, PageHeaderButton } from '../app-page-header/app-page-header.service';

@Component({
    selector: 'app-cameras',
    templateUrl: './cameras.component.html',
    styleUrls: [ './cameras.component.css' ]
})
export class CamerasComponent {

    public static readonly PAGE_HEADER_TITLE: string = 'Cameras';
    public static readonly PAGE_HEADER_BUTTONS: PageHeaderButton[] = [];

    public constructor(private pageHeaderService: AppPageHeaderService) {

        pageHeaderService.setValues(CamerasComponent.PAGE_HEADER_TITLE, CamerasComponent.PAGE_HEADER_BUTTONS);

    }

}
