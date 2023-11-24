import { TitlePage } from "../../shared/components/TitlePage.styled";
import { SearchBar } from "../../shared/components/SearchBar/SearchBar";
import { NoticesList } from "../../components/Notices/NoticesList/NoticesList";
import { Container } from "../../shared/components/Container";
import { NoticeCategoryPanel } from "./NoticePage.styled";
const NoticesPage = () => {
  return (
    <>
      <Container>
        <TitlePage>Find your favorite pet</TitlePage>
        <SearchBar />
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
              <li>Add Pet</li>
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
