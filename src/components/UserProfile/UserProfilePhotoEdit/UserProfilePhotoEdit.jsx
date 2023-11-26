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
        
        const file = event.target.files[0];
        const obj = window.URL.createObjectURL(file);
        setObjUrl(obj);
        props.photoUrlHandler(obj);

        setOpenDownload(prev => !prev);
    }

    const handleDecline = () => {
        setOpenDownload(false);
        props.photoUrlHandler("");
    }

    const handleAccept = () => {
        console.log(objUrl);
        
        // Пасхалка для Володимира

        // const sendObjUrlToServer = async (objUrl) => {
        //     try {
        //       const response = await fetch('http://your-server-url/api/upload', {
        //         method: 'POST',
        //         headers: {
        //           'Content-Type': 'application/json', // або 'multipart/form-data', залежно від вашого випадку
        //         },
        //         body: JSON.stringify({ objUrl }),
        //       });
          
        //       const result = await response.json();
        //       console.log(result);
        //     } catch (error) {
        //       console.error('Error sending objUrl to server:', error);
        //     }
        //   };
    }

    return (<>
            
            {openDownload ?
            <ImgAcceptBox>
                <ImgBtnAccept type="button" onClick={handleAccept} /> 
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