import PropTypes from 'prop-types';
import Notification from './Notification';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total <= 0) {
    return <Notification message="There is no feedback" />;
  } else {
    return (
      <>
        <p className={css.item}>Good: {good}</p>
        <p className={css.item}>Neutral: {neutral}</p>
        <p className={css.item}>Bad: {bad}</p>
        <p className={css.item}>Total: {total}</p>
        {positivePercentage <= 0 ? (
          <p className={css.item}>Positive feedback: 0%</p>
        ) : (
          <p className={css.item}>Positive feedback: {positivePercentage}%</p>
        )}
      </>
    );
  }
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
