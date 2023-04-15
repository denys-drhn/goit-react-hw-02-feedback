import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total <= 0) {
    return <Notification message="There is no feedback" />;
  } else {
    return (
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        {
          (positivePercentage = NaN ? ( // схоже на костиль
            <p>Positive feedback: 0%</p>
          ) : (
            <p>Positive feedback: {positivePercentage()}%</p>
          ))
        }
      </>
    );
  }
};

export default Statistics;
