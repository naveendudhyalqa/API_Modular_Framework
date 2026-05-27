import { expect } from '@playwright/test';

export function validateUserName(
    actualName: string,
    expectedName: string
) {

    expect(actualName).toBe(expectedName);

}

export function validateUserJob(
    actualJob: string,
    expectedJob: string
) {

    expect(actualJob).toBe(expectedJob);

}