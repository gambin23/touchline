import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

interface LetContext<T> {
    let: T | null;
}

@Directive({
    selector: '[let]'
})
export class LetDirective<T> {
    private _context: LetContext<T> = {let: null};

    constructor(_viewContainer: ViewContainerRef, _templateRef: TemplateRef<LetContext<T>>) {
        _viewContainer.createEmbeddedView(_templateRef, this._context);
    }

    @Input()
    set let(value: T) {
        this._context.let = value;
    }
}
