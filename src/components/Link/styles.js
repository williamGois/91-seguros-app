import styled from 'styled-components';

export const LinkContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

export const LinkButton = styled.TouchableOpacity`
    background-color: ${props => props.backgroundColor};
    
`;

export const LinkText = styled.Text`
    color: ${props => props.color};
    font-size:  ${props => props.fontSize}px;
`;
