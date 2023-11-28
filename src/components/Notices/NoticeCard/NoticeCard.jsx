//import { useAuth } from "../../../hooks/useAuth";
import {
  Item,
  ContainerPetInfo,
  Image,
  ContainerPetStatus,
  TextStatus,
  ContainerButton,
  Button,
  ListPetInfo,
  ItemPetInfo,
  SpanPetText,
  TextPetName,
  LearnMoreBtn,
  NoticeListWrapper,
} from "./NoticeCard.styled";
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";
import { ReactComponent as LocationIcon } from "../../../assets/icons/location.svg";
import { ReactComponent as ClockIcon } from "../../../assets/icons/clock.svg";
import { ReactComponent as FemaleIcon } from "../../../assets/icons/female.svg";
import { ReactComponent as MaleIcon } from "../../../assets/icons/male.svg";
import PetPhoto from "../../../assets/images/petsImages/cat1.jpg";
import { theme } from "../../../shared/styles/theme";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { infoNotices } from "../../../redux/notices/selectorsNotices.js";
import { useEffect, useState } from "react";
// import { getAllNotices } from "../../../redux/notices/operationsNotices.js";

import { Loader } from "../../Loader/Loader.jsx";
import Pagination from "../../../shared/components/Pagination/Pagination.jsx";
import UniversalModal from "../../../shared/components/UniversalModal/UniversalModal.jsx";
import { NoticeModalMore } from "../NoticeModals/NoticeModalMore.jsx";
import axios from "axios";

export const NoticeCard = (props) => {
  // const [dataAtr, setDataAtr] = useState({ page: 1, items: 12 });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [isModal, setIsModal] = useState(false);
  const [noticeId, setNoticeId] = useState();
  const [materials, setMaterials] = useState([]);

  function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  }
  // const { notices } = useSelector(infoNotices);
 

  
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllNotices({page: currentPage, limit: 12}));
  // }, [dispatch, currentPage]);
  
  useEffect(()=>{
    const getMaterials = async (pageNumber, itemsPerPage = 12) => {
      try {
        const response = await axios.get(`/api/notices?offset=${pageNumber}&limit=${itemsPerPage}`);

        setMaterials(response.data.data.resourses);
        setTotalPages(response.data.data.totalPages);
      } catch (error) {
        console.log(error);
      }
    }

    getMaterials(currentPage, 12);
      
  }, [currentPage]);

  const paginationHandler = (pageNumber) => {
    
    setCurrentPage(pageNumber);
  } 

  const handleModal = (id) => {
    if (typeof(id) === "string"){
      setNoticeId(id);
    }

    setIsModal((prev) => !prev);
  };
  
console.log(materials)

  return (
    <>
      <NoticeListWrapper>
        {materials ? (
          materials.map((notice) => (
            <Item key={notice._id}>
              <ContainerPetInfo>
                <Image src={PetPhoto} alt="pet" loading="lazy"></Image>
                <ContainerPetStatus>
                  <TextStatus>{notice.category}</TextStatus>
                  <ContainerButton>
                    <Button aria-label="add to favorites">
                      <HeartIcon
                        width={"24px"}
                        height={"24px"}
                        stroke={theme.colors.blueLink}
                      />

                      <HeartIcon
                        width={"24px"}
                        height={"24px"}
                        fill={theme.colors.blueLink}
                      />
                    </Button>

                    <Button aria-label="delete from favorites">
                      <TrashIcon
                        width={"24px"}
                        height={"24px"}
                        stroke={theme.colors.blueLink}
                        fill={theme.colors.lightBlue}
                      />
                    </Button>
                  </ContainerButton>
                </ContainerPetStatus>
                <ListPetInfo>
                  <ItemPetInfo>
                    <LocationIcon />
                    <SpanPetText>{notice.location}</SpanPetText>
                  </ItemPetInfo>
                  <ItemPetInfo>
                    <ClockIcon />
                    <SpanPetText>
                      {calculateAge(notice.birthday)} year
                    </SpanPetText>
                  </ItemPetInfo>
                  <ItemPetInfo>
                    <FemaleIcon />
                    <MaleIcon />
                    <SpanPetText>{notice.sex}</SpanPetText>
                  </ItemPetInfo>
                </ListPetInfo>
              </ContainerPetInfo>
              <TextPetName>{notice.title}</TextPetName>
              <LearnMoreBtn
                aria-label="show more options"
                onClick={() => handleModal(notice._id)}
              >
                Learn more
              </LearnMoreBtn>
            </Item>
          ))
        ) : (
          <Loader />
        )}
      </NoticeListWrapper>
      <Pagination
        totalPages={totalPages}
        page={currentPage}
        paginationHandler={paginationHandler}
      />
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
