import { TitlePage } from "../../shared/components/TitlePage.styled";
import { SearchBar } from "../../shared/components/SearchBar/SearchBar";
import { NoticesList } from "../../components/Notices/NoticesList/NoticesList";
import { Container } from "../../shared/components/Container";
import { NoticeCategoryPanel, StaledDiv } from "./NoticePage.styled";
import { AddPetBtn } from "../../components/AddPetBtn/AddPetBtn";

const NoticesPage = () => {
  return (
    <>
      <Container>
        <TitlePage>Find your favorite pet</TitlePage>
        <StaledDiv>
          <SearchBar />
          </StaledDiv>
        <>
          <div>
            <NoticeCategoryPanel>
              <li>sell</li>
              <li>lost/found</li>
              <li>in good hands</li>
              <li>favorite ads</li>
              <li>my ads</li>
            </NoticeCategoryPanel>
          
            <NoticeCategoryPanel>
              <li>Filter</li>
              <AddPetBtn />
            </NoticeCategoryPanel>
          </div>
          <div>
            <NoticesList />
          </div>
        </>
      </Container>
    </>
  );
};

export default NoticesPage;
