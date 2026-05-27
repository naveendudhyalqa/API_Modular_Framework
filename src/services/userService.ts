import { APIResponse } from '@playwright/test';
import { BaseService } from './baseService';
import { apiRoutes } from '../constants/apiRoutes';
export class UserService extends BaseService {

    async initialize() {
        await this.apiClient.initializeContext();
    }

    async getUser(userId: number): Promise<APIResponse> {
        return await this.apiClient.get(
            `${apiRoutes.USERS}/?page=${userId}`
        );
    }

    async createUser(payload: object): Promise<APIResponse> {
        return await this.apiClient.post(
            apiRoutes.USERS,
            payload
        );
    }

    async updateUser(userId: number, payload: object): Promise<APIResponse> {
        return await this.apiClient.put(
            `${apiRoutes.USERS}/${userId}`,
            payload
        );
    }

    async deleteUser(userId: number): Promise<APIResponse> {
        return await this.apiClient.delete(
            `${apiRoutes.USERS}/${userId}`
        );
    }

    async dispose() {
        await this.apiClient.disposeContext();
    }

}