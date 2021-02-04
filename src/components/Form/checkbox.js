import React, { useEffect, useRef, Plataform } from 'react';
import { useField } from '@unform/core';
import CheckBox from '@react-native-community/checkbox';
import CheckboxFormX from 'react-native-checkbox-form';
import { View, Text } from 'react-native';

export default function Checkbox({ name, ...rest }) {

    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        }), [fieldName, registerField]
    })

    const mockData = [
        {
            label: 'Manter-me logado',
            RNchecked: true
        }
    ];

    return (
        <View >
            {Platform.OS === 'ios' ?
                <CheckboxFormX style={{ width: 350 - 30 }}
                    dataSource={mockData}
                    itemShowKey="label"
                    itemCheckedKey="RNchecked"
                    iconSize={16}
                    itemCheckedKey={"12"}
                    formHorizontal={true}
                    labelHorizontal={true}
                    onChecked={() => alert("Aooo Goiania")} ref={inputRef} {...rest} /> :
                <CheckBox ref={inputRef} {...rest} />
            }
        </View>
    );
}