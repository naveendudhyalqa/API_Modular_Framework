import { test, expect } from '@playwright/test';

import { UserService } from '../../services/userService';

import { logger } from '../../utils/logger';

test('Verify GET User API', async () => {

    logger.info('Starting GET User API Test');

    const userService = new UserService();

    await userService.initialize();

    const response = await userService.getUser(2);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

    logger.info('GET User API Test Completed Successfully');

    await userService.dispose();

});