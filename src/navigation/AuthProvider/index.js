import React, { createContext, useState, useEffect, useReducer } from 'react';
import Reducer from '../Reducer'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

const initialState = {
    isModalVisible: false,
    logged: false,
    user: {}
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const userRemove = async () => {
        await dispatch({ type: 'USER_FIREBASE_LOGIN', payload: {} });
        await dispatch({ type: 'USER_LOGGED', payload: false });
    }

    const googleLogin = async () => {
        try {
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            const user =  await auth().signInWithCredential(googleCredential);

            await dispatch({ type: 'MODAL', payload: !state.isModalVisible });
            await dispatch({ type: 'USER_FIREBASE_LOGIN', payload: user });
            await dispatch({ type: 'USER_LOGGED', payload: true });

            
        } catch (error) {
            console.log({ error });
        }
    }

    const loginFromFacebook = async () => {
        logout();

        try {
            // await LoginManager.logout();
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

            if (result.isCancelled) {
                throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
                throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

            // Sign-in the user with the credential
            const user = await auth().signInWithCredential(facebookCredential);

            await dispatch({ type: 'MODAL', payload: !state.isModalVisible });
            await dispatch({ type: 'USER_FIREBASE_LOGIN', payload: user });
            await dispatch({ type: 'USER_LOGGED', payload: true });

        } catch (error) {
            console.log({ error });
        }
    }

    const logout = async () => {
        try {
            await auth().signOut();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                loginFromFacebook,
                logout,
                state,
                userRemove,
                googleLogin,
                dispatch
            }}>
            {children}
        </AuthContext.Provider>
    );
};
