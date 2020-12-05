import PropTypes from 'prop-types';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import styles from './Table.module.css';

export default function SortHeading({ desc, title, onClick }) {
  const tooltip = desc ? 'Sort oldest to newest' : 'Sort newest to oldest';
  return (
    <th title={tooltip} style={{ cursor: 'pointer' }} onClick={onClick} className={styles.centre}>
      {desc ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      {title}
    </th>
  );
}

SortHeading.propTypes = {
  desc: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
