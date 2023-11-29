import { useDispatch } from "react-redux";
import { TitlePage } from "../../shared/components/TitlePage.styled";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { verifyEmailUser } from "../../redux/auth/operation";

export default function VerifyPage(props) {
  const verifyComplete = (state) => state.auth.token;
  console.log(verifyComplete);
  const { verifyToken } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyEmailUser(verifyToken));
    
  });

  return (
    <>
      <TitlePage>Verification page</TitlePage>
      {verifyToken ? (
        <TitlePage>Your email verification success</TitlePage>
      ) : (
        <TitlePage>Your email not verify</TitlePage>
      )}
    </>
  );
}
