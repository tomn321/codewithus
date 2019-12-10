import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LoggerService } from './logger.service';
import { Customer } from './model';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/delay';
import  'rxjs/add/operator/do';
import  'rxjs/add/operator/toPromise';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';
import  'rxjs/add/Observable/throw';

@Injectable()
export class DataService {
    private customerUrl = 'api/customers';
    private statesUrl = 'api/states';
    private regionsUrl = 'api/regions';
    constructor(private loggerService: LoggerService, private http: Http) { }

    getCustomersP(): Promise<Customer[]> {
        this.loggerService.log(`Getting customers as a Promise...`)

        return this.http.get(this.customerUrl)
            .toPromise()
            .then(response => {
                const custs = response.json().data as Customer[];
                this.loggerService.log(`Getting customers ${custs.length}`);
                return custs;
            },
            error => {
                this.loggerService.log(`Error occurred ${error}`);
                return Promise.reject('Something bad happed check the console.');
            }
        );
    }

    getCustomers(): Observable<Customer[]> {
        this.loggerService.log(`Getting customers as a Observable...`);

        return this.http.get(this.customerUrl)
            .map(response => response.json().data as Customer[])
            .do((custs)=>{
                this.loggerService.log(`Getting customers ${custs.length}`);
            })
            .catch((error: any) => {
                return this.handleError(error);

            })

    }

    getStates() : Observable<string[]> {
        this.loggerService.log(`Getting states as an Observable via Http ... `);
        return this.http.get(this.statesUrl)
            .map(response => response.json().data as string[])
            .do((states) =>{
                this.loggerService.log(`Got ${states.length} states.`);
            })
            .catch((error: any) => {
                return this.handleError(error);

            })
    }
    
    getRegions() : Observable<string[]> {
        this.loggerService.log(`Getting regions as an Observable via Http ... `);
        return this.http.get(this.regionsUrl)
            .map(response => response.json().data as string[])
            .do((regions) =>{
                this.loggerService.log(`Got ${regions.length} regions.`);
            })
            .catch((error: any) => {
                return this.handleError(error);
            })
    }
    
    handleError(error: any) {
        this.loggerService.log(`Error occurred: ${error}`);
        return Observable.throw('Something bad happened please check the console.')

    }
}