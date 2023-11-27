import {
  AttentionForm,
  AttenitonTitle,
  AttentionText,
} from "./MainAttention.styled";

export const MainAttention = () => {
  return (
    <AttentionForm>
      <AttenitonTitle>Attention</AttenitonTitle>
      <AttentionText>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </AttentionText>
      <div>
        <button>Log IN</button>
        <button>Registration</button>
      </div>
    </AttentionForm>
  );
};
