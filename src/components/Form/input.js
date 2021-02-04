import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { TextInput } from './styles';

export default function Input({ name, ...rest}){

    const inputRef= useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value'
        }), [fieldName, registerField]
    })

    return(
        <TextInput ref={inputRef} {...rest} />
    );
}