import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface LetContext<T> {
	let: T | null;
}

@Directive({
	selector: '[let]'
})
export class LetDirective<T> {
	private context: LetContext<T> = { let: null };

	constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<LetContext<T>>) {
		viewContainer.createEmbeddedView(templateRef, this.context);
	}

	@Input()
	set let(value: T) {
		this.context.let = value;
	}
}
