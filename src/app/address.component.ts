import { Component, OnInit, Input } from '@angular/core';
import { Address } from './model';
import { DataService } from './data.service';

@Component({
    moduleId: module.id,
    selector: 'my-address',
    templateUrl: 'address.component.html'
})

export class AddressComponent implements OnInit {
    states: string[];
    regions: string[];
    
    constructor(private dataService: DataService) { }

    ngOnInit() { 
        this.dataService.getStates().subscribe((states) => {
            this.states = states;
        });
        this.dataService.getRegions().subscribe((regions) => {
            this.regions = regions;
        });
    }


    @Input() address: Address;
}