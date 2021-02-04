import styled from 'styled-components';

export const ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  elevation: ${props => props.shadow};
  border-radius: 50px;
  padding-vertical: 12px;
  padding-horizontal: 15px;
  background-color: ${props => props.backgroundColor};
  width:100%;
`;

export const ButtonText = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  text-align:center;
  color: ${props => props.color};
`;

export const ButtonIcon = styled.Image`
 width:25px;
 height:24px;
`;
