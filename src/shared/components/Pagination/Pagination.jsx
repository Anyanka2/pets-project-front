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

        if ( total === current) {
            startCount= current - 2;
            maxCount = current;
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