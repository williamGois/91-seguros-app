import React from 'react';
import styled from 'styled-components';

export const TextInput = styled.TextInput`
 border: 1px solid gray;
 border-radius: 17px;
 font-size: 20px;
 padding: 15px;
 margin-bottom: 25px;
 background-color: ${props => props.backgroundColor};
 
`;
