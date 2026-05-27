import { test } from '@playwright/test';

import { UserService } from '../../services/userService';

import {
    createUserPayload
} from '../../payloads/userPayload';

import {
    validateStatusCode
} from '../../validators/statusCodeValidator';

import {
    validateUserName
} from '../../validators/responseValidator';

import {
    validateSchema
} from '../../validators/schemaValidator';

import userSchema from '../../schemas/userSchema.json';

import { logger } from '../../utils/logger';

test('Verify Create User API', async () => {

    logger.info('Starting Create User API Test');

    const userService = new UserService();

    await userService.initialize();

    const payload = createUserPayload();

    const response = await userService.createUser(payload);

    const responseBody = await response.json();

    console.log(responseBody);

    validateStatusCode(response, 201);

    validateUserName(
        responseBody.name,
        payload.name
    );

    validateSchema(userSchema, responseBody);

    logger.info('Create User API Test Completed Successfully');

    await userService.dispose();

});