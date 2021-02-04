import styled from 'styled-components';

export const ConteinerView = styled.View`
    background-color: #FFFFFF;
    padding: 15px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    padding-bottom:50px;
`;

export const ModalTitle = styled.Text`
    font-size: 20px;
    margin-bottom: 40px;
    font-weight: bold;
    width:65%;
`;

export const ViewTitle = styled.View`
    flex-direction: row;
`;

export const ModalClose = styled.TouchableOpacity`
    justify-content: flex-end;
    flex-direction: row;
    background-color: transparent;
    width:30%;
`;

export const ModalImageClose = styled.Image`
    width:34px;
    height:34px;
`;


