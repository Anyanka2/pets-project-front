import { useSelector } from "react-redux";
import { selectToken } from "../../../redux/user/userSelectors";
import { List, Button, ListItem } from "./NoticesCategoryNav.styled";

export const filters = [
  { filter: "sell", path: "sell", isPublic: true },
  { filter: "lost/found", path: "lost-found", isPublic: true },
  { filter: "in good hands", path: "good-hands", isPublic: true },
  { filter: "favorite ads", path: "favorite", isPublic: false },
  { filter: "my ads", path: "my-pets", isPublic: false },
];

export const NoticesCategoryNav = () => {
  const isAuthorized = useSelector(selectToken);

  const items = filters.map(({ filter }) => {
    if (
      filter === "sell" ||
      filter === "lost/found" ||
      filter === "in good hands"
    ) {
      return (
        <ListItem key={filter}>
          <Button to={`/notices/${filter}`}>{filter}</Button>
        </ListItem>
      );
    } else if (isAuthorized) {
      return (
        <ListItem key={filter}>
          <Button to={`/notices/${filter}`}>{filter}</Button>
        </ListItem>
      );
    }
    return null;
  });

  return <List>{items}</List>;
};
