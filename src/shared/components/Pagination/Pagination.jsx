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
        if (!event.target.dataset.index) {
            return;
        }
        const index = event.target.dataset.index;
        switch (index) {
            case "leftArrow":
                if (Number(props.page) <= 1 ) {
                    return;
                }
                props.paginationHandler(Number(props.page) - 1);
                
                break;
            case "rightArrow":
                
                if (Number(props.page) >= Number(props.totalPages) ) {
                    return;
                }
                props.paginationHandler(Number(props.page) + 1);
                break;
            default:
                
                props.paginationHandler(Number(index));
                break;
        }
    }
    
    useEffect(() => {
        const collection = [];
        let startCount = 1;
        let maxCount = 5;
        const total = Number(props.totalPages);
        const current = Number(props.page);

        if (window.innerWidth < 768){
            maxCount = 4;
        }
        
        if (current > 3 ){
            startCount = current - 2;
            maxCount = current + 2;
        }

        if ( total  <= current || total <= (current + 4) ) {
            startCount= current ;
            maxCount = total;
        }

        if (current > total || current < 0) {
            return;
        }
        
        for (let i = startCount; i <= maxCount; i++ ){
           
            if (i === current){
                collection.push(<CurrentCircle data-index={i} key={i} >{i}</CurrentCircle>)
            }else {
                collection.push(<DefaultCircle data-index={i} key={i}>{i}</DefaultCircle>); 
            }  
        }
        setCounter(collection);
        
    },[props.page, props.totalPages]);

    return (<>
        <PaginationContainer onClick={pageHandler}>
            <LeftArrowImg src={leftArrow} alt="leftArrow" data-index="leftArrow" />
             {counter}
            <RightArrowImg src={rightArrow}  alt="rightArrow" data-index="rightArrow" />
        </PaginationContainer>
    </>);
}