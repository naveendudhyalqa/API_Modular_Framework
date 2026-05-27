import { APIClient } from '../client/apiClient';

export class BaseService {

    protected apiClient: APIClient;

    constructor() {

        this.apiClient = new APIClient();

    }

}