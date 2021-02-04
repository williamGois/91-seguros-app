
import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AppStack from '../AppStack';
import {AuthContext} from '../AuthProvider';


const Routes = () => {  
    return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  };
  
  export default Routes;