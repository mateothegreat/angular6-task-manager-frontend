import { Component, OnInit } from '@angular/core';
import { AppPageHeaderService, PageHeaderButton } from '../app-page-header/app-page-header.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: [ './settings.component.css' ]
})
export class SettingsComponent implements OnInit {

    public static readonly PAGE_HEADER_BUTTONS: PageHeaderButton[] = [

        new PageHeaderButton('User Access', '/settings/users', 'supervised_user_circle'),
        new PageHeaderButton('Roles & Permissions', '/settings/roles', 'verified_user')

    ];

    public constructor(private pageHeaderService: AppPageHeaderService) {

        pageHeaderService.headerTitle = 'Settings';
        pageHeaderService.buttons = SettingsComponent.PAGE_HEADER_BUTTONS;

    }

    public ngOnInit() {

    }

}
