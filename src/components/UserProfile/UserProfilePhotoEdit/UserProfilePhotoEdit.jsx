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
    const openPhotoHandler = () => {
        setOpenDownload(prev => !prev)
    }

    return (<>
            <HiddenInputFile type="file" id="hiddenInputFile" accept="image/*" />
            {openDownload ?
            <ImgAcceptBox>
                <ImgBtnAccept /> 
                <p>Confirm</p>
                <ImgBtnDecline />
            </ImgAcceptBox>
            :
            <LableForHiddenInput htmlFor="hiddenInputFile" onClick={openPhotoHandler}>
                <p>Edit photo</p>
            </LableForHiddenInput>}
    </>);
}