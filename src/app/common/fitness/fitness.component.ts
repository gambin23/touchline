import { Component, Input, } from '@angular/core';

import { Size } from '../../ui/ui.model';

@Component({
	selector: 'fitness',
	templateUrl: './fitness.component.html'
})
export class FitnessComponent {
	@Input() percent: number;
	@Input() size?: Size;
	@Input() showText = false;
}
