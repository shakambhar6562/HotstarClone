import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams} from 'react-router-dom'
import {getDocs,setDoc,onSnapshot,db,colref,getDoc,doc} from '../firebase'
import { collection,query,where} from 'firebase/firestore';
function Detail() {
    const { id } = useParams();
    const  [movie,setMovie] = useState()
    var s="";
    s=s+id;
    
    
    useEffect(()=>{
        async function fetchData() {
            const docRef = doc(db, "movies",s);
            const docSnap = await getDoc(docRef);
          
            if (docSnap.exists()) {
                setMovie(docSnap.data());
               
              } else {
                // doc.data() will be undefined in this case
                console.log('error');
                
              }

           
        }
        fetchData();
        
       
    },[])
    console.log('Movie is',movie);
    
   
  return (
    <Container>
        {movie && (
            <>
        <Background>
            <img src= {movie.cardid}/>
        </Background>
        <ImageTitle>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
        </ImageTitle>
        <Controls>
            <Playbutton>
                <img src="/images/play-icon-black.png" />
                <span>PLAY</span>

            </Playbutton>

            <Trailerbutton>
                <img src="/images/play-icon-white.png" />
                <span>TRAILER</span>


            </Trailerbutton>

            <Addbutton>
                <span> + </span>

            </Addbutton>

            <GroupwatchButton>
                <img src="/images/group-icon.png" />

            </GroupwatchButton>

        </Controls>
        <Subtitle>
           {movie.subtitle}
        </Subtitle>
        <Description>
            {movie.about}

        </Description>
        </>
        )}
    </Container>
  )
}

export default Detail
const Container = styled.div `
min-height: calc(100vh -70px);
padding: 0 calc(3.5vw + 5px);
position:relative;

`
const Background =styled.div `
    position:fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index:-1;
    opacity:0.7;

    img {
        width:100%;
        height: 100%;
        object-fit:cover;
    }
`
const ImageTitle =styled.div `
    min-height:170px;
    margin-top:20px;
    min-width:200px;
    height:30vh;
    width:35vw;

    img {
        width: 100%;
        height:100%;
        object-fit:contain;

    }

`
const Controls=styled.div`
    display:flex;
    align-items:center;


`
const Playbutton =styled.button `
    border-radius:4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right:22px;
    display:flex;
    align-items:center;
    height: 56px;
    background:rgb(249,249,249);
    border:none;
    letter-spacing:1.8px;
    cursor:pointer;

    &:hover {
        background:rgb(198,198,198);
    }

`
const Trailerbutton=styled(Playbutton) `
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color:rgb(249,249,249);
    



`

const Addbutton =styled.button `
    margin-right:16px;
    height:44px;
    width:44px;
    display:flex;
    align-items-center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor:pointer;
    
    span {
        padding-top:2px;
        font-size:30px;
        color:white;
    }

`

const GroupwatchButton =styled.button `
    height:46px;
    cursor:pointer;
    width:46px;
    display:flex;
    border-radius:50%;
    border:1px solid white;
    background: rgb(0,0,0);
    align-items:center;
    justify-content:center;



`
const Subtitle=styled.div`
    color: rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:30px;


`

const Description =styled.div `
    line-height:1.4;
    font-size:20px;
    margin-top:16px;
    max-width:600px;

`