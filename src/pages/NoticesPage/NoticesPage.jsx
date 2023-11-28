import { TitlePage } from "../../shared/components/TitlePage.styled";
import { SearchBar } from "../../shared/components/SearchBar/SearchBar";
//import { MainAttention } from "../../shared/components/Attentions/MainAttention/MainAttention";
import { NoticesList } from "../../components/Notices/NoticesList/NoticesList";
import { Container } from "../../shared/components/Container";
import {
  StaledDiv,
  NoticePanelLeft,
  NoticePanelRigth,
} from "./NoticePage.styled";
import { NoticesCategoryNav } from "../../components/Notices/NoticeCategoryPanel/NoticesCategoryNav";
import { AddPetBtn } from "../../components/AddPetBtn/AddPetBtn";
import {Button} from "../../shared/components/Buttons/Button.styled"

const NoticesPage = () => {
  return (
    <>
      <Container>
        <TitlePage>Find your favorite pet</TitlePage>
        <StaledDiv>
          <SearchBar />
        </StaledDiv>
        <>
          {/* <MainAttention /> */}
          <NoticePanelLeft>
            <NoticesCategoryNav />
          </NoticePanelLeft>
          <NoticePanelRigth>
            <Button>Filter</Button>
            <AddPetBtn />
          </NoticePanelRigth>
          <div>
            <NoticesList />
          </div>
        </>
      </Container>
    </>
  );
};

export default NoticesPage;
