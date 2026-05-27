import { expect, APIResponse } from '@playwright/test';

export function validateStatusCode(
    response: APIResponse,
    expectedStatusCode: number
) {

    expect(response.status()).toBe(expectedStatusCode);

}