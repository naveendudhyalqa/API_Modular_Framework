import { test, expect } from '@playwright/test';

import { UserService } from '../../services/userService';

import {
    updateUserPayload
} from '../../payloads/userPayload';

import { logger } from '../../utils/logger';

test('Verify Update User API', async () => {

    logger.info('Starting Update User API Test');

    const userService = new UserService();

    await userService.initialize();

    const payload = updateUserPayload();

    const response = await userService.updateUser(2, payload);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.job).toBe(payload.job);

    logger.info('Update User API Test Completed Successfully');

    await userService.dispose();

});