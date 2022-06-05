import React, { useEffect} from 'react'
import styled from 'styled-components'
import {selectUserName,selectUserphoto,setUserLogin,setSignout} from '../features/user/userSlice'
import {useSelector,useDispatch} from 'react-redux'
import {auth,provider} from '../firebase'

import { useNavigate } from 'react-router-dom';

import {
    getAuth,
    GoogleAuthProvider,
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    signInWithRedirect
  } from "firebase/auth";
import { async } from '@firebase/util'


function Header() {
    const dispatch=useDispatch();
    const navigate = useNavigate()
    const userName=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserphoto);

    useEffect(()=> {
        auth.onAuthStateChanged(async(user)=> {
            if(user)
            {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email:user.email,
                    photo:user.photoURL
                }))
                navigate('/')


            }

        })

    }, [])

    const SignIn =() => {

        signInWithPopup(auth, provider)
        .then((result) => {
            let user=result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email:user.email,
                photo:user.photoURL
            }))
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
        

    }

    const signOuts =() => {
        signOut(auth,provider).then(()=> {
            dispatch(setSignout());
            navigate('/login')
            

        })
    }


  return (
    <Nav>
        <Logo src="/images/logo.svg"/>
        {
            !userName ?  (
            <LoginContainer>
            <Login onClick={SignIn}>Login</Login>
            </LoginContainer>
            
            ) :

            <>
             <Navmenu>
            <a>
                <img src="/images/home-icon.svg"/>
                <span>HOME</span>
            </a>

            <a>
                <img src="/images/search-icon.svg"/>
                <span>SEARCH</span>
            </a>

            <a>
                <img src="/images/watchlist-icon.svg"/>
                <span>WATCHLIST</span>
            </a>

            <a>
                <img src="/images/original-icon.svg"/>
                <span>ORIGINALS</span>
            </a>

            <a>
                <img src="/images/movie-icon.svg"/>
                <span>MOVIES</span>
            </a>

            <a>
                <img src="/images/series-icon.svg"/>
                <span>SERIES</span>
            </a>

        </Navmenu>
        <UserImg onClick={signOuts} src="https://yt3.ggpht.com/gnYIU3KkmUq12WPBgxYc0ghQbFiC6yhx0xMbuZT3D30iO1yIaaSPl1jpj0tn5rG3Yx7-5xpl=s900-c-k-c0x00ffffff-no-rj"/>
            
            
            </>
        }
       
    </Nav>
  )
}

export default Header
const Nav= styled.nav`
    height:70px;
    background:#090b13;
    display: flex;
    align-items : center;
    padding: 0 36px;
    overflow-x: hidden;
`
const Logo= styled.img`
    width:80px;

`
const Navmenu =styled.div `
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;
    a {
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor: pointer;
    
        img {
             height:20px;
            }
        span {
            font-size:13px;
            letter-spacing:1.24px;
            position: relative;
    

        &:after {
            content : "";
            height: 2px;
            background :white;
            position : absolute;
            left:0;
            right:0;
            bottom: -6px;
            opacity:0;
            transform-origin: right center;
            transition: all 250ms cubic-bezier (0.25,0.46,0.45,0.94) 0s;
            transform : scaleX(0);
        }
    }
    &:hover {
        span:after {
            transform :scaleX(1);
            opacity 1;
        }

    }
}

`
const UserImg =styled.img `
    width:48px;
    height:48px;
    border-radius: 50%;
    cursor:pointer;

`
const Login =styled.div `
    
    border:1px solid #f9f9f9;
    padding:8px 16px;
    border-radius:4px;
    letter-spacing:1.5px;
    text-transform:uppercase;
    background-color:rgba(0,0,0,0.6);
    transition: all 0.2 ease 0s;
    cursoe:pointer;
    

    &:hover {
        background-color:#f9f9f9;
        color:#000;
        border-color:transparent;
    }
`
const LoginContainer =styled.div `
    flex:1;
    display:flex;
    justify-content: flex-end;

`