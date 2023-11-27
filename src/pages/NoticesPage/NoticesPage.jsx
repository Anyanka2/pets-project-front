import { TitlePage } from "../../shared/components/TitlePage.styled";
import { SearchBar } from "../../shared/components/SearchBar/SearchBar";
import { MainAttention } from "../../shared/components/Attentions/MainAttention/MainAttention";
import { NoticesList } from "../../components/Notices/NoticesList/NoticesList";
import { Container } from "../../shared/components/Container";
import { StaledDiv } from "./NoticePage.styled";
import { NoticesCategoryNav } from "../../components/Notices/NoticeCategoryPanel/NoticesCategoryNav";
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
            <SearchBar />
            <MainAttention />
        <TitlePage>This is the Notices Page!</TitlePage>
          <div>
            <NoticesCategoryNav />
              {/* <li>sell</li>
              <li>lost/found</li>
              <li>in good hands</li>
              <li>favorite ads</li>
              <li>my ads</li>
            </NoticesCategoryNav>
          
            <NoticeCategoryPanel>
              <li>Filter</li>
              <AddPetBtn />
            </NoticeCategoryPanel> */}
            <AddPetBtn />
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
