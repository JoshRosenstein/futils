import { flow } from './flow';
export function createFlow(...operations) {
    return (value) => flow(value, ...operations);
}
