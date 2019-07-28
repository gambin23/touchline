import { Component, OnInit, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'settings-background',
	templateUrl: './background.component.html',
	styleUrls: ['./background.component.scss']
})
export class SettingsBackgroundComponent implements OnInit {
	constructor(private userService: UserService) { }

	imagesPath = '/assets/backgrounds/';
	backgroundImages = [1, 2, 3, 4];
	activeId: number;

	ngOnInit() {
		this.activeId = this.userService.getBackground();
	}

	changeBackground(imageId?: number) {
		this.activeId = imageId;
		this.userService.setBackground(this.activeId);
	}
}
