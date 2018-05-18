import { Component } from '@angular/core';
import { AppPageHeaderService, PageHeaderButton } from '../app-page-header/app-page-header.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {

    public static readonly PAGE_HEADER_TITLE: string = 'Home';
    public static readonly PAGE_HEADER_BUTTONS: PageHeaderButton[] = [];

    public constructor(private pageHeaderService: AppPageHeaderService) {

        pageHeaderService.setValues(HomeComponent.PAGE_HEADER_TITLE, HomeComponent.PAGE_HEADER_BUTTONS);

    }

}
