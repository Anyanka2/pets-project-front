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

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [materials, setMaterials] = useState([]);
  const [totalPages, setTotalPages] =useState();
  useEffect(()=>{
    const getMaterials = async (pageNumber, itemsPerPage = 10) =>{
      try {
        const respons = await axios.get(`/api/news?offset=${pageNumber}&limit=${itemsPerPage}`);
        console.log(respons.data.data.resourses);
        setMaterials(respons.data.data.resourses);
        setTotalPages(respons.data.data.totalPages);
      } catch (error) {
        console.error(error);
      }
    }
    getMaterials(currentPage, 6);
  }, [currentPage]);

  const paginationHandler = (pageNumber) => {

    setCurrentPage(pageNumber);
  } 

  return (
    <>
      <StyledContainer>
              <TitlePage>News</TitlePage>
             <StaledDiv><SearchBar /></StaledDiv> 
        <NewsBox>
          {materials.map((material) => {
            return(<NewsCard>
                    <NewsBlueHeader />
                    <NewsBody>
                      <NewsImg src={material.imgUrl} alt={material.title} />
                      <NewsTitle>{material.title}</NewsTitle>
                      <NewsDescription>
                        {material.text}
                      </NewsDescription>
                      <NewsMore>
                        <NewsDate>{}</NewsDate>
                        <NewsReadMoreLink href={material.url} target="_blank">Read more</NewsReadMoreLink>
                      </NewsMore>
                    </NewsBody>
                  </NewsCard>)
            })
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
