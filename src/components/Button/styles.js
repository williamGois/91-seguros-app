import styled from 'styled-components';

export const ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  elevation: 8;
  border-radius: 50px;
  padding-vertical: 15px;
  padding-horizontal: 12px;
  margin-bottom:  15px;
  background-color: ${props => props.backgroundColor};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  align-self: center;
  margin-left:10px;
  color: ${props => props.color};
`;

export const ButtonIcon = styled.Image`
 width:25px;
 height:24px;
`;
