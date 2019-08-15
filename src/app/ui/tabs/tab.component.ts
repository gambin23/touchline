import { Component, Input } from '@angular/core';

@Component({
	selector: 'tab',
	templateUrl: './tab.component.html'
})
export class TabComponent {
	@Input() name: string;
	@Input() active = false;
	@Input() isWrapped = false;
}
