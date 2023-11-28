import { TitlePage } from "../../shared/components/TitlePage.styled";
import { SearchBar } from "../../shared/components/SearchBar/SearchBar";
import { Container } from "../../shared/components/Container";
import {
  StaledDiv,
  NoticePanelLeft,
  NoticePanelRigth,
} from "./NoticePage.styled";
import { NoticesCategoryNav } from "../../components/Notices/NoticeCategoryPanel/NoticesCategoryNav";
import { AddPetBtn } from "../../components/AddPetBtn/AddPetBtn";
import {Button} from "../../shared/components/Buttons/Button.styled"
import { NoticeCard } from "../../components/Notices/NoticeCard/NoticeCard";
import { MainAttention } from "../../shared/components/Attentions/MainAttention/MainAttention";

const NoticesPage = () => {
  return (
    <>
      <Container>
        <TitlePage>Find your favorite pet</TitlePage>
        <StaledDiv>
          <SearchBar />
        </StaledDiv>
        <>
            
          <NoticePanelLeft>
            <NoticesCategoryNav />
          </NoticePanelLeft>
          <NoticePanelRigth>
            <Button>Filter</Button>
            <AddPetBtn />
          </NoticePanelRigth>
          <div>
            <NoticeCard />
          </div>
        </>
        <MainAttention />
      </Container>
    </>
  );
};

export default NoticesPage;
