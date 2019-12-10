
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Customer, Address } from './model';

@Component({
    moduleId: module.id,
    selector: 'customer-detail',
    templateUrl: 'customer-detail.component.html'
})

export class CustomerDetailComponent {
    constructor() { }
    @Input() customer: Customer;
    @Output() shift = new EventEmitter<number>();

    showAddress = true;

    right() {
        this.shift.emit(1)
    }

    left() {
        this.shift.emit(-1);
    }
}
