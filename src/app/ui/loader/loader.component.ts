import { Component, Input, } from '@angular/core';


@Component({
    selector: 'loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.components.scss']
})
export class LoaderComponent {
    @Input() show = false;
}
