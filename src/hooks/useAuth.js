import { useSelector } from "react-redux";
import {
  selectUser,
  selectToken,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsNewUser,
  selectError,
  selectIsLoading,
} from "../redux/user/userSelectors.js";

export const useAuth = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isNewUser = useSelector(selectIsNewUser);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return {
    user,
    token,
    isLoggedIn,
    isRefreshing,
    isNewUser,
    error,
    isLoading,
  };
};
