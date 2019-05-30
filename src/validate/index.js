export const required = value =>
    value || typeof value === 'number' ? undefined : 'Required';

export const maxLength = max => value =>
    value && value.length > max
        ? `The field must be less than ${max} characters`
        : undefined;

export const equally = val => value =>
    value && value !== val ? `error` : undefined;

export const number = value =>
    value && isNaN(Number(value)) ? 'Enter numbers' : undefined;

export const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;

export const minValue8 = minValue(8);

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Enter an email'
        : undefined;

export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Invalid phone number, must be 10 digits'
        : undefined;