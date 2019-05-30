import React from 'react';
import {InputField} from '../../Theme/'

export const renderField = ({
    input,
    label,
    placeholder,
    type,
    id,
    meta: {touched, error, warning},
}) => (
    <InputField
        className={
            touched && error
                ? input.value !== ''
                ? 'block-input error_border value'
                : 'error_border block-input'
                : input.value !== ''
                ? 'block-input value'
                : 'block-input'
        }
    >
        <input
            {...input}
            placeholder={placeholder}
            id={id}
            type={type}
            autoComplete="new-password"
        />
        {label ? <span className="title">{label}</span> : null}
        {touched && error ? <span className="error">{error}</span> : null}
    </InputField>
);

export const renderFieldTextArea = ({
    input,
    label,
    placeholder,
    id,
    heightArea = '120px',
    keyPress = () => {},
    meta: {touched, error, warning},
}) => (
    <InputField
        className={
            touched && error
                ? input.value !== ''
                ? 'block-input error_border value'
                : 'error_border block-input'
                : input.value !== ''
                ? 'block-input value'
                : 'block-input'
        }
    >
        <textarea
            {...input}
            onKeyPress={keyPress}
            placeholder={placeholder}
            id={id}
            style={{height: heightArea}}
            autoComplete="off"
        />
        {label ? <span className="title">{label}</span> : null}
        {touched && error ? <span className="error">{error}</span> : null}
    </InputField>
);
