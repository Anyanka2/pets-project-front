import FilterSubMenu from '../FilterSubMenu/FilterSubMenu';
import CheckedFilter from '../CheckedFilter/CheckedFilter';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../hooks/useResize';
import { ReactComponent as FilterIcon } from "../../assets/icons/filters.svg";
import {
  FilterWrapper,
  CheckedContainer,
  Btn,
  Filters,
  FiltersText,
} from './NoticesFilters.styled';

// chooseGender,chooseAge

const NoticesFilters = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAgeMenuOpen, setAgeIsMenuOpen] = useState(false);
  const [isGenderMenuOpen, setGenderIsMenuOpen] = useState(false);
  const [screenWidth] = useWindowSize();
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    const filterBtn = document.getElementById('filtersBtn');
    const menu = document.getElementById('filtersMenu');

    const outsideFilterMenuClickHandler = e => {
      if (
        e.target !== menu &&
        !menu.contains(e.target) &&
        e.target !== filterBtn &&
        !filterBtn.contains(e.target)
      )
        setIsMenuOpen(false);
    };

    document.body.addEventListener('click', outsideFilterMenuClickHandler);

    return () =>
      document.body.removeEventListener('click', outsideFilterMenuClickHandler);
  }, []);

//   useEffect(() => {
//     chooseGender(gender);
//   }, [gender, chooseGender]);

//   useEffect(() => {
//     chooseAge(age);
//   }, [age, chooseAge]);

  const filtersToggle = e => {
    if (e.currentTarget.id === 'By age') {
      setAgeIsMenuOpen(prevState => !prevState);

      return;
    }

    if (e.currentTarget.id === 'By gender') {
      setGenderIsMenuOpen(prevState => !prevState);

      return;
    }

    setAgeIsMenuOpen(false);
    setGenderIsMenuOpen(false);
    setIsMenuOpen(prevState => !prevState);
  };

  const ageBtnText = age => {
    switch (age) {
      case '3m-12m':
        return '3-12 m';

      case '1y':
        return '1 year';

      case '2y':
        return '2 year';

      default:
        return '';
    }
  };

  return (
    <FilterWrapper>
      <CheckedContainer>
            {age && screenWidth >= 320 && (
                <CheckedFilter text={ageBtnText(age)} clickHandler={() => setAge('')} />
            )}
            {gender && screenWidth >= 320 && (
                <CheckedFilter text={gender} clickHandler={() => setGender('')} />
            )}
      </CheckedContainer>
      <Btn
        id="filtersBtn"
        type="button"
        onClick={filtersToggle}
        isOpen={isMenuOpen}
        aria-label="Show filters"
      >
        {screenWidth >= 768 && 'Filter'} <FilterIcon />
      </Btn>
      <Filters
        id="filtersMenu"
        isOpen={isMenuOpen}
        isAgeMenuOpen={isAgeMenuOpen}
        isGenderMenuOpen={isGenderMenuOpen}
      >
        <FiltersText>Filters</FiltersText>
        <FilterSubMenu
          isAgeMenuOpen={isAgeMenuOpen}
          isGenderMenuOpen={isGenderMenuOpen}
          toggleMenu={filtersToggle}
          setGenderFilter={setGender}
          setAgeFilter={setAge}
          age={age}
          gender={gender}
        />
      </Filters>
    </FilterWrapper>
  );
};

export default NoticesFilters;