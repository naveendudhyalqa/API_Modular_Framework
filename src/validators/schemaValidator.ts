import { expect } from '@playwright/test';
import Ajv from 'ajv';

const ajv = new Ajv();

export function validateSchema(
    schema: object,
    responseBody: object
) {

    const validate = ajv.compile(schema);

    const isValid = validate(responseBody);

    expect(isValid).toBeTruthy();

}