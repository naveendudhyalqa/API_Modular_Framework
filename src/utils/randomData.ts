import { faker } from '@faker-js/faker';

export function generateRandomName(): string {

    return faker.person.firstName();

}

export function generateRandomJob(): string {

    return faker.person.jobTitle();

}

export function generateRandomEmail(): string {

    return faker.internet.email();

}