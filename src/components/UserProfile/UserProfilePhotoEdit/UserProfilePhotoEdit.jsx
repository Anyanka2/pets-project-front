import { useState } from "react";
import { 
        HiddenInputFile,
        ImgAcceptBox,
        ImgBtnAccept,
        ImgBtnDecline,
        LableForHiddenInput,
        } from "./UserProfilePhotoEdit.styled.jsx";

export default function UserProfilePhotoEdit (props) {
    const [openDownload, setOpenDownload] = useState(false);
    const [objUrl, setObjUrl] = useState({});
    const openPhotoHandler = (event) => {
        console.log(event);
        const file = event.target.files[0];
        const obj = window.URL.createObjectURL(file);
        props.photoUrlHandler(obj);

        setOpenDownload(prev => !prev);
    }

    const handleDecline = () => {
        setOpenDownload(false);
        props.photoUrlHandler("");
    }

    return (<>
            
            {openDownload ?
            <ImgAcceptBox>
                <ImgBtnAccept type="button" /> 
                <p>Confirm</p>
                <ImgBtnDecline type="button" onClick={handleDecline}/>
            </ImgAcceptBox>
            :
            <LableForHiddenInput htmlFor="hiddenInputFile" onChange={openPhotoHandler}>
                <p>Edit photo</p>
                <HiddenInputFile type="file" id="hiddenInputFile" accept="image/*" />
            </LableForHiddenInput>}
    </>);
}