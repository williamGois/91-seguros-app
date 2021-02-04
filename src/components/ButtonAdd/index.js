import React from "react";

import {
    ButtonContainer,
    ButtonText,
    ButtonIcon
} from './styles';

const AppButtonAdd = (props) => {
    return (
        <ButtonContainer onPress={props.onPress} shadow={props.shadow} backgroundColor={props.backgroundColor} >
            {props.icon == 'google' &&
                <ButtonIcon source={require("../../images/google.png")} />
            }
            {props.icon == 'facebook' &&
                <ButtonIcon source={require("../../images/facebook.png")} />
            }
            <ButtonText color={props.textColor}>{props.text}</ButtonText>
        </ButtonContainer>
    );
};

export default AppButtonAdd;