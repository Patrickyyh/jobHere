


import styled from 'styled-components'




const Wrapper = styled.main`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#videos{
    display: grid;
    grid-template-columns: 1fr 1fr;
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
    overflow:hidden;
}


.video-player{
    background-color: black;
    width: 100%;
    height: 100%;
    object-fit: cover;
    

}

.smallFrame {
    position: fixed;
    top: 20px;
    left: 20px;
    height: 170px;
    width: 300px;
    border-radius: 5px;
    border: 2px solid #b366f9;
    -webkit-box-shadow: 3px 3px 15px -1px rgba(0,0,0,0.77);
    box-shadow: 3px 3px 15px -1px rgba(0,0,0,0.77);
    z-index: 999;
}

#user-2{
    display: none;
}

#control{
    position: fixed;
    bottom:  20px;
    left:  50%;
    transform:translateX(-50%);
    display: flex;
    gap:  1em;
}


.control-container {
    background-color: rgb(179,102,249,.9);
    padding:  10px;
    border-radius:  50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

}

.control-container img {
    height: 30px;
    width: 30px;
}

#button-configure{
    border-radius:  60%;
    background-color: rgb(255,80,80,1);
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

#leave-btn {
    background-color: rgb(255,80,80,1);
}

/* .video-player{
    background-color: black;
    width: 100%;
    height: 100%;
    object-fit: cover;
} */

`

export default Wrapper
