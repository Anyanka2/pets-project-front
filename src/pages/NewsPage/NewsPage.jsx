import { useEffect, useState } from "react";
import Pagination from "../../shared/components/Pagination/Pagination";
import { SearchBar } from "../../shared/components/SearchBar/SearchBar";
import { TitlePage } from "../../shared/components/TitlePage.styled";
import { StyledContainer } from "../../shared/styles/media";
import {
    NewsBlueHeader,
    StaledDiv,
  NewsBody,
  NewsBox,
  NewsCard,
  NewsDate,
  NewsDescription,
  NewsImg,
  NewsMore,
  NewsReadMoreLink,
  NewsTitle,
} from "./NewsPage.styled.jsx";
import axios from "axios";
import { Loader } from "../../components/Loader/Loader.jsx";
import { useSearchParams } from "react-router-dom";

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [materials, setMaterials] = useState([]);
  const [totalPages, setTotalPages] =useState();
  const [searchParams, setSearchParams] = useSearchParams({newsTitle:""});

  const searchHandler = (searchValue) => {
    setSearchParams({newsTitle: searchValue })
  }

  useEffect(()=>{
    const getMaterials = async (pageNumber, itemsPerPage = 10) =>{
      try {
        const searchValue = searchParams.get("newsTitle");
        const respons = await axios.get(`/api/news?offset=${pageNumber}&limit=${itemsPerPage}&title=${searchValue}`);
        // if(respons.data.data.resourses.length === 0){
        //   setSearchParams({newsTitle:""});
        // }
        setMaterials(respons.data.data.resourses);
        setTotalPages(respons.data.data.totalPages);

      } catch (error) {
        console.error(error);

      }
    }
    getMaterials(currentPage, 6);
  }, [currentPage, searchParams]);

  const paginationHandler = (pageNumber) => {
    
    setCurrentPage(pageNumber);
  } 
  
  return (
    <>
      <StyledContainer>
              <TitlePage>News</TitlePage>
             <StaledDiv><SearchBar searchHandler={searchHandler} /></StaledDiv> 
        <NewsBox>
          {materials.length === 0 ? (<div>Not found</div>): (materials.map((material) => {
            
            const dateObj = new Date(material.date);
            const day = dateObj.getUTCDate();
            const month = dateObj.getUTCMonth() + 1;
            const year = dateObj.getUTCFullYear();

            return(<NewsCard key={material._id}>
                    <NewsBlueHeader />
                    <NewsBody>
                      <NewsImg src={material.imgUrl} alt={material.title} />
                      <NewsTitle>{material.title}</NewsTitle>
                      <NewsDescription>
                        {material.text}
                      </NewsDescription>
                      <NewsMore>
                        <NewsDate>{`${day}/${month}/${year}`}</NewsDate>
                        <NewsReadMoreLink href={material.url} target="_blank">Read more</NewsReadMoreLink>
                      </NewsMore>
                    </NewsBody>
                  </NewsCard>)
            }))
          }
        </NewsBox>
        <Pagination totalPages={totalPages}
                    page={currentPage} 
                    paginationHandler={paginationHandler} />
      </StyledContainer>
    </>
  );
};

export default NewsPage;
