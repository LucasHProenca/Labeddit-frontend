import React from "react";
import {AiOutlineClose} from "react-icons/ai"

const BACKGROUND_STYLE = {
position: 'fixed',
top: '0',
bottom: '0',
left: '0',
right: '0',
backgroundColor: 'rgb(0,0,0, 0.7)',
zIndex: '1000',
}

const MODAL_STYLE = {
position: 'fixed',
top: '50%',
left: '50%',
width: '500px',
maxWidth: '90%',
transform: 'translate(-50%, -50%)',
padding: '10%',
backgroundColor: '#fff',
borderRadius: '10px',
color: 'black',
transition: '.5s'
}

const BUTTON_STYLE = {
position: 'absolute',
top: '5%',
right: '5%',
cursor: 'pointer',
}

export default function DeleteModal ({isOpenDelModal, children, setIsOpenDelModal}) {
    if (isOpenDelModal) {
        return<>
        <div style={BACKGROUND_STYLE}>
            <div style={MODAL_STYLE}>
                {children}
                <AiOutlineClose style={BUTTON_STYLE} onClick={() => setIsOpenDelModal()}></AiOutlineClose>
            </div>
        </div>
        </>
    }
}