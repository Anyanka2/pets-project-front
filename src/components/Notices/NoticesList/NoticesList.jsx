import { NoticeCard } from "../NoticeCard/NoticeCard";
import { NoticeListWrapper } from "../NoticesList/NoticesList.styled";
import { NoticeModalMore } from "../NoticeModals/NoticeModalMore";

export const NoticesList = () => {
  return (
    <>
      <NoticeListWrapper>
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeModalMore />
      </NoticeListWrapper>
    </>
  );
};
