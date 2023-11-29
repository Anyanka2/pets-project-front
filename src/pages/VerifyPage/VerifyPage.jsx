import { useDispatch } from "react-redux";
import { TitlePage } from "../../shared/components/TitlePage.styled";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { verifyEmailUser } from "../../redux/auth/operation";

export default function VerifyPage(props) {
  const { completeVerify, setCompleteVerify } = useState("");
  const { verifyToken } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const response = dispatch(verifyEmailUser(verifyToken));
    setCompleteVerify(response);
  });

  return (
    <>
      <TitlePage>Verification page</TitlePage>
      {!completeVerify ? (
        <TitlePage>Your email not verify</TitlePage>
      ) : (
        <TitlePage>Your email verification success</TitlePage>
      )}
    </>
  );
}
