import React, { useContext, useEffect } from 'react';
import Hr from '../Hr'
import AppLink from '../Link'
import AppButton from '../Button'

import {
  ConteinerView,
  ModalTitle,
  ViewTitle,
  ModalClose,
  ModalImageClose
} from './styles';

import { AuthContext } from '../../navigation/AuthProvider';

const AppModalLogin = (props) => {

  const { state, loginFromFacebook, userRemove, googleLogin } = useContext(AuthContext);

  const gotoLoginFacebook = async () => {
    await userRemove();
    await loginFromFacebook();
  }

  const gotoLoginGmail= async () => {
    await userRemove();
    await googleLogin();
  }

  useEffect(() => {
    if (state.logged) {
      props.navigation.navigate('Register');
    }
  }, [props]);

  return (
    <ConteinerView>
      <ViewTitle>
        <ModalTitle>{props.title}</ModalTitle>
        <ModalClose onPress={props.onPress}><ModalImageClose source={require("../../images/x.png")}/></ModalClose>
      </ViewTitle>
      <AppButton onPress={() => gotoLoginGmail()} icon="" icon="google" text="Usar Google" textColor="#FFFFFF" backgroundColor="#d1302b" />
      <AppButton onPress={() => gotoLoginFacebook()} icon="facebook" text="Usar Facebook" textColor="#FFFFFF" backgroundColor="#043e8a" />
    </ConteinerView>
  );
};

export default AppModalLogin;


