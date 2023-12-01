import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { filters } from './filtersData';
import { List, ListItem, Btn } from './NoticesCategoriesNav.styled';
import { selectToken } from '../../redux/auth/selectors';

export const NoticesCategoriesNav = (props) => {
  const isAuthorized = useSelector(selectToken);

  const onCategoryChange = (category) => {
    props.onChange(category);
  }

  let filteredItems = [];
  if (isAuthorized) {
    filteredItems = filters.map(({ filter }) => {
      return (
        <ListItem key={filter}>
          <Btn onClick={() => onCategoryChange(filter)}>{filter}</Btn>
        </ListItem>
      );
    });
  } else {
    filteredItems = filters.filter((item) => item.isPublic).map(({ filter }) => {
      return (
        <ListItem key={filter}>
          <Btn onClick={() => onCategoryChange(filter)}>{filter}</Btn>
        </ListItem>
      );
    });
  }
  return <List>{filteredItems}</List>;
};

NoticesCategoriesNav.propTypes = {
  onChange: PropTypes.func
};

export default NoticesCategoriesNav;