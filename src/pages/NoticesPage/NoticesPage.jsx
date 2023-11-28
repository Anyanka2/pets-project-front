import { TitlePage } from "../../shared/components/TitlePage.styled";
import { SearchBar } from "../../shared/components/SearchBar/SearchBar";
import { Container } from "../../shared/components/Container";
import {
  StaledDiv,
  NoticePanelLeft,
  NoticePanelRigth,
  FilterIcon,
} from "./NoticePage.styled";
import { NoticesCategoryNav } from "../../components/Notices/NoticeCategoryPanel/NoticesCategoryNav";
import { AddPetBtn } from "../../components/AddPetBtn/AddPetBtn";
import { Button } from "../../shared/components/Buttons/Button.styled";
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
            <Button>
              Filter
              <FilterIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="transparent"
                >
                  <path
                  stroke="#54ADFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m4 4 5 8v6l6 3v-9l5-8H4Z"
                  />
                </svg>
              </FilterIcon>
            </Button>
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
