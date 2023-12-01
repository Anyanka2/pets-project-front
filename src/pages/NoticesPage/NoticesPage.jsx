import { TitlePage } from "../../shared/components/TitlePage.styled";
import { SearchBar } from "../../shared/components/SearchBar/SearchBar";
import { Container } from "../../shared/components/Container";
import {
  StaledDiv,
  NoticePanelLeft,
  NoticePanelRigth,
  FilterContainer,
  // FilterIcon,
} from "./NoticePage.styled";
import { useState } from "react";
// import { NoticesCategoryNav } from "../../components/Notices/NoticeCategoryPanel/NoticesCategoryNav";
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters';
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav'
import { AddPetBtn } from "../../components/AddPetBtn/AddPetBtn";
// import { Button } from "../../shared/components/Buttons/Button.styled";
import { NoticeCard } from "../../components/Notices/NoticeCard/NoticeCard";
import { MainAttention } from "../../shared/components/Attentions/MainAttention/MainAttention";
import UniversalModal from "../../shared/components/UniversalModal/UniversalModal";

const NoticesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const searchHandler = (value) => {
    setKeyword(value);
  };

  const onCategorySelect = (value) => {
    setCategory(value);
  };
  
  return (
    <>
      <Container>
        <TitlePage>Find your favorite pet</TitlePage>
        <StaledDiv>
          <SearchBar searchHandler={searchHandler} />
        </StaledDiv>
        <>
          <FilterContainer>
            <NoticePanelLeft>
              <NoticesCategoriesNav onChange={onCategorySelect} />
            </NoticePanelLeft>
            <NoticePanelRigth>
              {/* <Button>
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
              </Button> */}
              <NoticesFilters />
              <AddPetBtn onClick={handleModal} />
            </NoticePanelRigth>
          </FilterContainer>
          <div>
            <NoticeCard searchKeyword={keyword} searchCategory={category} />
          </div>
        </>
        <UniversalModal isModalOpen={isModalOpen} onClick={handleModal}>
          <MainAttention />
        </UniversalModal>
      </Container>
    </>
  );
};

export default NoticesPage;
