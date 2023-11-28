//import { useSelector } from "react-redux";
//import { selectToken } from "../../../redux/user/userSelectors";
import { List, Button, ListItem } from "./NoticesCategoryNav.styled";

export const filters = [
  { filter: "sell", path: "sell" },
  { filter: "lost/found", path: "lost-found" },
  { filter: "in good hands", path: "good-hands" },
  { filter: "favorite ads", path: "favorite" },
  { filter: "my ads", path: "my-pets" },
];

export const NoticesCategoryNav = () => {
 // const token = useSelector(selectToken);
  const items = filters.map(({ filter, path }, item) => {
    //const isAuthorized = path === "favorite" || path === "my-pets";

    // if (!token ? () : ()) {
    //   return null;
    // }

    return (
      <ListItem key={item}>
        <Button to={`/notices/${path}`}>{filter}</Button>
      </ListItem>
    );
  });

  return <List>{items}</List>;
};
