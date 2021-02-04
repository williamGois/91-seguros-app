import React from "react";

import {
    HrContainer,
    HrView
  } from './styles';

const Hr = (props) => {
    return (
        <HrContainer>
            <HrView color={props.color}></HrView>
        </HrContainer>
    );
};

export default Hr;