import { Component, Input } from '@angular/core';

@Component({
	selector: 'panel',
	templateUrl: './panel.component.html'
})
export class PanelComponent {
	@Input() name: string;
	@Input() padding = false;
	@Input() hidePanel = false;
	@Input() collapsible = true;
	@Input() loading = false;
	@Input() error: string;

	togglePanel() {
		if (this.collapsible) {
			this.hidePanel = !this.hidePanel;
		}
	}
}
