import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgProgressModule } from 'ngx-progressbar';
import { MaterialModule } from './shared/MaterialModule';
import { AppSidebarLeftComponent } from './app-sidebar-left/app-sidebar-left.component';
import { AppPageHeaderComponent } from './app-page-header/app-page-header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { DVRComponent } from './dvr/dvr.component';
import { CamerasComponent } from './cameras/cameras.component';
import { ViewerComponent } from './viewer/viewer.component';
import { AppCardWidgetComponent } from './app-card-widget/app-card-widget.component';
import { UsersComponent } from './users/users.component';
import { AppPageHeaderService } from './app-page-header/app-page-header.service';

@NgModule({

    declarations: [

        AppComponent,

        AppSidebarLeftComponent,

        AppPageHeaderComponent,

        HomeComponent,

        SettingsComponent,

        DVRComponent,

        CamerasComponent,

        ViewerComponent,

        AppCardWidgetComponent,

        UsersComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,

        NgxDatatableModule,
        NgProgressModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            progressBar: true,
            enableHtml: true,
            closeButton: true

        }),

        RouterModule.forRoot([ {

            path: 'home',
            component: HomeComponent

        }, {

            path: 'cameras',
            component: CamerasComponent

        }, {

            path: 'dvr',
            component: DVRComponent

        }, {

            path: 'viewer',
            component: ViewerComponent

        }, {

            path: 'settings',
            component: SettingsComponent

        }, {

            path: '',
            pathMatch: 'full',
            redirectTo: 'home'

        } ])

    ],

    providers: [

        AppPageHeaderService

    ],

    bootstrap: [ AppComponent ]

})
export class AppModule {
}
