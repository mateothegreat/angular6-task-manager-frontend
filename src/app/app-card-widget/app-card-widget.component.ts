import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-widget',
    templateUrl: './app-card-widget.component.html',
    styleUrls: [ './app-card-widget.component.scss' ]
})
export class AppCardWidgetComponent {

    @Input() public widgetTitle: string;
    @Input() public widgetDescription: string;
    @Input() public widgetIcon: string;
    @Input() public widgetButtonLabel: string;

    public constructor() {

    }

}
