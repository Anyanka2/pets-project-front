import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { List, Button, ListItem } from "./NoticesCategoryNav.styled";

export const filters = [
  { filter: "sell", path: "sell" },
  { filter: "lost/found", path: "lost-found" },
  { filter: "in good hands", path: "good-hands" },
  { filter: "favorite ads", path: "favorite" },
  { filter: "my ads", path: "my-pets" },
];

export const NoticesCategoryNav = () => {
  const isUser = useSelector(selectIsLoggedIn);
  const items = filters.map(({ filter, path }, item) => {
    const isAuthorized = path === "favorite" || path === "my-pets";

    if (!isUser && isAuthorized) {
      return null;
    }

    return (
      <ListItem key={item}>
        <Button to={`/notices/${path}`}>{filter}</Button>
      </ListItem>
    );
  });

  return <List>{items}</List>;
};
