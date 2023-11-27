import { TitlePage } from "../../shared/components/TitlePage.styled";
import { SearchBar } from "../../shared/components/SearchBar/SearchBar";
import { MainAttention } from "../../shared/components/Attentions/MainAttention/MainAttention";

const NoticesPage = () => {

    return (
        <>
            <SearchBar />
            <MainAttention />
        <TitlePage>This is the Notices Page!</TitlePage>
        </>
    )
}

export default NoticesPage;