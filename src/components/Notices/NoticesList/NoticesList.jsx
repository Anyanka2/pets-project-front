import { NoticeCard } from "../NoticeCard/NoticeCard";
import { NoticeListWrapper } from "../NoticesList/NoticesList.styled";
import Pagination from "../../../shared/components/Pagination/Pagination.jsx";
import UniversalModal from "../../../shared/components/UniversalModal/UniversalModal.jsx";
import { NoticeModalMore } from "../NoticeModals/NoticeModalMore.jsx";

import { useState } from "react";

export const NoticesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [isModal, setIsModal] = useState(false);
  const [noticeId, setNoticeId] = useState();

  const paginationInit = (page = 1, total =1 ) => {
    setCurrentPage(page);
    setTotalPages(total);
    
  }

  const test = (id) => {
    console.log(id);
  }

  const handleModal = (id) => {
    if (typeof(id) === "string"){
      setNoticeId(id);
    }
    
    // console.dir(event)
    console.log(id);
    setIsModal((prev) => !prev);
  };

  const paginationHandler = (pageNumber) => {
    
    setCurrentPage(pageNumber);
  } 

  return (
    <>
      <NoticeListWrapper>
        <NoticeCard paginationInit={paginationInit} 
                    currentPage={currentPage}
                    handleModal={handleModal} 
                    test={test}
                    />
      </NoticeListWrapper>
      <Pagination totalPages={totalPages}
                  page={currentPage}
                  paginationHandler={paginationHandler} />
       <UniversalModal
        isModalOpen={isModal}
        evt="children"
        onClick={handleModal}
      >
        <NoticeModalMore noticeId={noticeId} />
      </UniversalModal>
    </>
  );
};
