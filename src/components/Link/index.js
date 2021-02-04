import React from "react";

import {
    LinkContainer,
    LinkText,
    LinkButton
  } from './styles';

const AppLink = (props) => {
    return (
        <LinkContainer>
            <LinkButton onPress={props.onPress} backgroundColor={props.backgroundColor}><LinkText color={props.textColor} fontSize={props.fontSize}>{props.text}</LinkText></LinkButton>
        </LinkContainer>
    );
};

export default AppLink;