import PropTypes from 'prop-types';
import { filters } from './filtersData';
import { List, ListItem, Btn } from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = ({ isUser }) => {
  const items = filters.map(({ filter, path }, ind) => {
    // if (!isUser && filter === 'favorite ads') {
    //   return null;
    // }

    // if (!isUser && filter === 'my ads') {
    //   return null;
    // }

    return (
      <ListItem key={ind}>
        <Btn to={`/notices/${path}`}>{filter}</Btn>
      </ListItem>
    );
  });

  return <List>{items}</List>;
};

NoticesCategoriesNav.propTypes = {
  isUser: PropTypes.bool.isRequired,
};

export default NoticesCategoriesNav;