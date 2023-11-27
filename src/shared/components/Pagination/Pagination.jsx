import { useState } from "react";
import { PaginationContainer, 
        LeftArrowImg, 
        RightArrowImg, 
        DefaultCircle,
        CurrentCircle,  } from "./Pagination.styles.jsx";
import leftArrow from "../../../assets/icons/leftArrow.svg";
import rightArrow from "../../../assets/icons/rightArrow.svg";
import { useEffect } from "react";

export default function Pagination (props) {

    const [counter, setCounter] = useState([]);
    
    useEffect(() => {
        const collection = [];
        let current = props.page;
        console.log(props.page)
        if(current === 0 ) {
            current = 1;
        }

        for (let i = 1; i <= 5; i++ ){
           
            if (i === Number(current)){
                collection.push(<CurrentCircle onClick={pageHandler}>{i}</CurrentCircle>)
            }else {
                collection.push(<DefaultCircle onClick={pageHandler}>{i}</DefaultCircle>); 
            }  
        }
        setCounter(collection);
        
    },[props.page]);

    const  pageHandler = (event) => {
        props.paginationHandler(event.target.textContent);
    }

    return (<>
        <PaginationContainer>
            <LeftArrowImg src={leftArrow} />
             {counter}
            <RightArrowImg src={rightArrow} />
        </PaginationContainer>
    </>);
}