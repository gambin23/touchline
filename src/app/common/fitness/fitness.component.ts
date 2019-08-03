import { Component, Input, } from '@angular/core';

import { Size } from '../../ui/ui.model';

@Component({
	selector: 'fitness',
	templateUrl: './fitness.component.html',
	styleUrls: ['./fitness.component.scss']
})
export class FitnessComponent {
	@Input() value: number;
	@Input() size?: Size;
	@Input() showText = false;
}
