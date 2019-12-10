import { InMemoryDbService } from 'angular-in-memory-web-api';
import { createTestCustomers } from './test-data';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const regions = ['North', 'East', 'South', 'West', 'Midwest'];
        const states = ['California', 'Quebec', 'Jalisco', 'Illinois'];
        return { customers: createTestCustomers(), states, regions}
    }
}