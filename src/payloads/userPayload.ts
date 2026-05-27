import {
    generateRandomName,
    generateRandomJob
} from '../utils/randomData';

export function createUserPayload() {

    return {

        name: generateRandomName(),
        job: generateRandomJob()

    };

}

export function updateUserPayload() {

    return {

        name: generateRandomName(),
        job: 'Senior QA Engineer'

    };

}