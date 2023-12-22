import React from 'react';
import { auth, provider } from '../firebase-config.js';
import { signInWithPopup } from 'firebase/auth';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Auth = (props) => {
    const { setIsAuth } = props;

    const SignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="auth-container">
            <p>Sign In With Google To Continue</p>
            <button onClick={SignInWithGoogle}>Sign In With Google</button>
        </div>
    );
};
