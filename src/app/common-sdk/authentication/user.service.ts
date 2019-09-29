import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable()
export class UserService {
	constructor(private rendererFactory: RendererFactory2) {
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	public renderer: Renderer2;

	setBackground(id: number) {
		if (id === 0) {
			this.renderer.setStyle(document.body, 'background-image', 'none');
		} else {
			this.renderer.setStyle(document.body, 'background-image', `url(../../assets/backgrounds/${id}.jpg)`);
		}
		localStorage.setItem('background', String(id));
	}

	getBackground(): number {
		const backgroundId = Number(localStorage.getItem('background'));
		return backgroundId ? backgroundId : 1;
	}
}
