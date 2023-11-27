import { useState } from "react";
import {  PaginationContainer, LeftArrowImg, RightArrowImg, DefaultCircle,  } from "./Pagination.styles.jsx";
import leftArrow from "../../../assets/icons/leftArrow.svg";
import rightArrow from "../../../assets/icons/rightArrow.svg";
import { useEffect } from "react";

export default function Pagination ({totalPages = 0, currentPage = 0}) {
    // const [currentPage, setCurrentPage] = useState();
    // const [totalPage, setTotalPage] = useState();
    const [counter, setCounter] = useState();
    console.log(counter);
    useEffect(() => {
        // let total = totalPages;
        let current = currentPage;
        const collection = []; 

        if(current === 0 ) {
            current = 1;
        }

        for (let i = 0; i > 4; i + 1 ){
            if(current >= 4) {
                
               return  collection
            }
        }
        const fromNum = current - 2;
        console.log( fromNum);


      setCounter(); 
    },[totalPages, currentPage]);

    return (<>
        <PaginationContainer>
            <LeftArrowImg src={leftArrow} />
             <DefaultCircle>1</DefaultCircle>
            <RightArrowImg src={rightArrow} />
        </PaginationContainer>
    </>);
}