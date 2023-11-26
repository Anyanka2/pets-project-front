import Pagination from "../../shared/components/Pagination/Pagination";
import { TitlePage } from "../../shared/components/TitlePage.styled";
import { StyledContainer } from "../../shared/styles/media";
import {NewsBlueHeader, NewsBody, NewsBox, NewsCard, NewsDate, NewsDescription, NewsImg, NewsMore, NewsReadMoreLink, NewsTitle} from "./NewsPage.styled.jsx";

const NewsPage = () => {

    return (
    <>
      <StyledContainer>
        <TitlePage>This is the News Page!</TitlePage>
        <NewsBox>
            <NewsCard>
                <NewsBlueHeader />
                <NewsBody>
                    <NewsImg src="" />
                    <NewsTitle>This is a News Title</NewsTitle>
                    <NewsDescription>This is a News description. About Bla. Bla-Bla. Bla-bla-bla. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dicta et dignissimos beatae fuga consequuntur quasi id nostrum, obcaecati non quaerat eius praesentium quis officia laboriosam. Minima aperiam atque exercitationem itaque accusantium totam rem consequuntur iure aliquid provident inventore non, cumque doloremque cupiditate praesentium. Quidem, similique. Molestias perspiciatis placeat alias.</NewsDescription>
                    <NewsMore>
                        <NewsDate>15/03/2023</NewsDate>
                        <NewsReadMoreLink href="#" >
                            Read more
                        </NewsReadMoreLink>
                    </NewsMore>
                </NewsBody>
            </NewsCard>
        </NewsBox>
        <Pagination totalPages="" currentPage="" />
      </StyledContainer>
    </>)
}

export default NewsPage;