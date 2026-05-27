import { request, APIRequestContext, APIResponse } from '@playwright/test';
import { config } from '../config/config';
import { logger } from '../utils/logger';

import { commonHeaders } from '../config/headers';
export class APIClient {

    private apiContext!: APIRequestContext;

    async initializeContext() {

        this.apiContext = await request.newContext({

            baseURL: config.baseURL,

            extraHTTPHeaders: commonHeaders

        });

    }

    async get(endpoint: string): Promise<APIResponse> {
        logger.info(`GET Request => ${endpoint}`);

        const response = await this.apiContext.get(endpoint);

        logger.info(`Response Status => ${response.status()}`);

        return response;
    }

    async post(endpoint: string, payload: object): Promise<APIResponse> {
        logger.info(`POST Request => ${endpoint}`);

        logger.info(`Payload => ${JSON.stringify(payload)}`);

        const response = await this.apiContext.post(endpoint, {
            data: payload
        });

        logger.info(`Response Status => ${response.status()}`);

        return response;
    }

    async put(endpoint: string, payload: object): Promise<APIResponse> {
        logger.info(`PUT Request => ${endpoint}`);

        logger.info(`Payload => ${JSON.stringify(payload)}`);

        const response = await this.apiContext.put(endpoint, {
            data: payload
        });

        logger.info(`Response Status => ${response.status()}`);

        return response;
    }

    async patch(endpoint: string, payload: object): Promise<APIResponse> {
        return await this.apiContext.patch(endpoint, {
            data: payload
        });
    }

    async delete(endpoint: string): Promise<APIResponse> {
        logger.info(`DELETE Request => ${endpoint}`);

        const response = await this.apiContext.delete(endpoint);

        logger.info(`Response Status => ${response.status()}`);

        return response;
    }

    async disposeContext() {
        await this.apiContext.dispose();
    }

}