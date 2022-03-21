import styled,{keyframes} from "styled-components";

export const WheelContainer = styled.div`
display:flex;
position: relative;
margin-left: 80px;
margin-top: 20px;

@media(min-width:360px){
  margin-left:5px;
}

@media(min-width:375px){
  margin-left:20px;
}

@media(min-width:1024px){
  margin-top:-80px;
}

`


const Animation = keyframes`
 0%,
  100% {
    text-shadow: 0 0 1vw #fa1c16, 0 0 3vw #fa1c16, 0 0 10vw #fa1c16,
      0 0 10vw #fa1c16, 0 0 0.4vw #fed128, 0.5vw 0.5vw 0.1vw #806914;
    color: #fed128;
  }
  50% {
    text-shadow: 0 0 0.5vw #800e0b, 0 0 1.5vw #800e0b, 0 0 5vw #800e0b,
      0 0 5vw #800e0b, 0 0 0.2vw #800e0b, 0.5vw 0.5vw 0.1vw #40340a;
    color: #806914;
  }
`

const Animation2 = keyframes`
 0%,
  100% {
    text-shadow: 0 0 1vw #1041ff, 0 0 3vw #1041ff, 0 0 10vw #1041ff,
      0 0 10vw #1041ff, 0 0 0.4vw #8bfdfe, 0.5vw 0.5vw 0.1vw #147280;
    color: #28d7fe;
  }
  50% {
    text-shadow: 0 0 0.5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180,
      0 0 5vw #082180, 0 0 0.2vw #082180, 0.5vw 0.5vw 0.1vw #0a3940;
    color: #146c80;
  }`

export const Header = styled.div`

height:200px ;
width:100%;

display:block;
text-align: center;

.h1{
 font-family:cursive;
 font-size: 55px;
 animation: ${Animation} 1s ease infinite;
-moz-animation: ${Animation}  1s ease infinite;
-webkit-animation: ${Animation}  1s ease infinite;

@media(min-width:360px){
  margin-right:25px;
  font-size:35px;
}
@media(min-width:375px){
  font-size: 35px;
  margin-right:20px;
}
}

.h2{
 font-family:cursive;
 font-size:75px;
 margin-left: 200px;
 animation: ${Animation2} 1s ease infinite;
-moz-animation: ${Animation2}  1s ease infinite;
-webkit-animation: ${Animation2}  1s ease infinite;

@media(min-width:360px){
  margin-right:25px;
  font-size:35px;
}
@media(min-width:375px){
  font-size: 55px;
  margin-left:150px;
}
}

`

export const SpinBtn = styled.button`
height:80px;
width:80px;
display:flex;
justify-content:center;
align-items:center;
outline: none;
z-index: 5;
position: absolute;
top: 183px;
left: 183px;
border-radius: 50%;
border: none;
font-size:30px ;

background-color: black;
box-shadow: 0px 0px 0px 9px;

animation: ${Animation} 1s ease infinite;
-moz-animation: ${Animation}  1s ease infinite;
-webkit-animation: ${Animation}  1s ease infinite;


@media(min-width:280px){
  height:20px;
  width: 20px;
  font-size:10px;
  top:105px;
  left:105px;
}

@media(min-width:360px){
  height:40px;
  width: 40px;
  font-size: 15px;
  top:125px;
  left:125px
}

@media(min-width:375px){
 height:50px;
 width: 50px;
 top:122px ;
 left:122px;
 font-size:20px;
}



@media(min-width:390px){
  top:130px;
  left:130px;
}
@media(min-width:412px){
  top:141px;
  left:141px;
}

@media(min-width:414px){
 top:140px;
 left:140px;
 font-size:20px;
}

@media(min-width:540px){
  top:192px;
  left:192px;
}

@media(min-width:768px){
  top:195px;
  left:195px;
}

@media(min-width:820px){
 top:195px;
 left:195px;
}

`

export const SpanTag = styled.span`
    position: absolute;
    top: 100%;
    left: 35rem;
    font-size: xx-large;

     animation: ${Animation} 1s ease infinite;
    -moz-animation: ${Animation}  1s ease infinite;
    -webkit-animation: ${Animation}  1s ease infinite;

    @media(min-width:280px){
      top:100%;
      left:1rem;
    }
    @media(min-width:360px){
      font-size: 35px;
      top:110%;
      left:4rem;
    }

    @media(min-width:375px){
      font-size: 35px;
      top:110%;
      left:4rem;
   }
   @media(min-width:540px){
     top:105%;
     left:8rem;
   }
   @media(min-width:1024px){
     top:50%;
     left:40rem;
   }
 
    `