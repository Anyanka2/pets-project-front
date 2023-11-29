import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { filters } from './filtersData';
import { selectToken } from "../../redux/user/userSelectors";
import { List, ListItem, Btn } from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  const isAuthorized = useSelector(selectToken);

  const items = filters.map(({ filter }) => {
    if (
      filter === "sell" ||
      filter === "lost/found" ||
      filter === "in good hands"
    ) {
      return (
        <ListItem key={filter}>
          <Btn to={`/notices/${filter}`}>{filter}</Btn>
        </ListItem>
      );
    } else if (isAuthorized) {
      return (
        <ListItem key={filter}>
          <Btn to={`/notices/${filter}`}>{filter}</Btn>
        </ListItem>
      );
    }
    return null;
  });

  return <List>{items}</List>;
};

NoticesCategoriesNav.propTypes = {
  isUser: PropTypes.bool.isRequired,
};

export default NoticesCategoriesNav;