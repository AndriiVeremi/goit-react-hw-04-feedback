import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import css from './App.module.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  console.log(good, neutral, bad)

  const handleClick = option => { 
     switch (option) {

       case 'good':
         setGood(good + 1);
         break;

       case 'neutral':
         setNeutral(neutral + 1);
         break;

       case 'bad':
         setBad(bad + 1);
         break;

       default:
         return;
     } 
  };

  const totalFeedback = () => good + neutral + bad;
  const feedbackPercentage = (  ) => Math.round((good * 100) / totalFeedback());

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            onFeedback={handleClick}
          />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback()}
          positivePercentage={feedbackPercentage()}
        />
      </Section>
    </div>
  );
}

export default App;
