import { useEffect, useState } from "react";
import { PaginationContainer, 
        LeftArrowImg, 
        RightArrowImg, 
        DefaultCircle,
        CurrentCircle,  } from "./Pagination.styles.jsx";
import leftArrow from "../../../assets/icons/leftArrow.svg";
import rightArrow from "../../../assets/icons/rightArrow.svg";

export default function Pagination (props) {

    const [counter, setCounter] = useState([]);

    const pageHandler = (event) => {
        // console.dir(event.target.dataset.index);
        const index = event.target.dataset.index;
        switch (index) {
            case "leftArrow":
                if (Number(props.page) <= 1 ) {
                    return;
                }
                props.paginationHandler(props.page - 1);
                // console.log(props.page);
                break;
            case "rightArrow":
                // console.log(props.page);
                props.paginationHandler(props.page + 1);
                break;
            default:
                props.paginationHandler(event.target.textContent);
                break;
        }
    }
    
    useEffect(() => {
        const collection = [];
       

        for (let i = 1; i <= 5; i++ ){
           
            if (i === Number(props.page)){
                collection.push(<CurrentCircle data-index={i} key={i} >{i}</CurrentCircle>)
            }else {
                collection.push(<DefaultCircle data-index={i} key={i}>{i}</DefaultCircle>); 
            }  
        }
        setCounter(collection);
        
    },[props.page]);

    return (<>
        <PaginationContainer onClick={pageHandler}>
            <LeftArrowImg src={leftArrow} alt="leftArrow" data-index="leftArrow" />
             {counter}
            <RightArrowImg src={rightArrow}  alt="rightArrow" data-index="rightArrow" />
        </PaginationContainer>
    </>);
}