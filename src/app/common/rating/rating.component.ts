import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
	@Input() name: string;
	@Input() value: number;
	@Input() alt?: boolean;

	ngOnInit() {

	}
}

