import React, { useContext,  useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }    
    const [newUser, setNewUser] = useState(false)

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
                console.log(displayName, photoURL, email);
            })
            .catch(err => {
                console.log(err);
                console.log(err.massage);
            })
    }

    const handleFbSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
                console.log(displayName, photoURL, email);
            })
            .catch(err => {
                console.log(err);
                console.log(err.massage);
            })
    }

    const handleSignedOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    photo: '',
                    email: '',
                    error: '',
                    success: false
                }
                setUser(signedOutUser)
                console.log(res);
            })
            .catch(err => {

            })
    }

    const handleBlur = (e) => {        
        let isFieldValid = true
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = (isPasswordValid && passwordHasNumber);

        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }
    const handleSubmit = (e) => {
        // console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    // ..
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    const { displayName, photoURL, email } = res.user;
                    const signedInUser = {
                        isSignedIn: true,
                        name: displayName,
                        email: email,
                        photo: photoURL
                    }
                    setLoggedInUser(signedInUser);
                    history.replace(from);
                    console.log(displayName, photoURL, email);
                   
                })
                
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log('user name updated successfully');
        }).catch(function (error) {
            console.log(error);
        });
    }
    return (
        <div className="form">
            {
                user.isSignedIn ? <button onClick={handleSignedOut} >Sign out</button> :
                    <button onClick={handleGoogleSignIn}>Sign in using Google</button>
            }
            <br />
            <button onClick={handleFbSignIn}>Sign in using facebook</button>
            {
                user.isSignedIn && <div>
                    <p>Welcome, {user.name}</p>
                    <p>Your email: {user.email}</p>
                    <img src={user.photo} alt="" />
                </div>
            }
            <h1>Our own Authentication</h1>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">New User Sign Up</label>

            <form onSubmit={handleSubmit}>
                {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name" />}
                <br />
                <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email Address" required />
                <br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password " required />
                <br />
                <input type="submit" value={newUser ? 'Sign up' : 'Sign in'} />

            </form>
            <p style={{ color: 'red' }}>{user.error}</p>
            {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged in'} successfully</p>}
        </div>
    );
};

export default Login;