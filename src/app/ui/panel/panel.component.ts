import { Component, Input } from '@angular/core';

@Component({
	selector: 'panel',
	templateUrl: './panel.component.html'
})
export class PanelComponent {
	@Input() title: string;
	@Input() padding = false;
	@Input() hidePanel = false;

	togglePanel() {
		this.hidePanel = !this.hidePanel;
	}
}
