import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    this.setState({ [e]: this.state[e] + 1 });
  };

  totalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  feedbackPercentage = ({ good }) =>
    Math.round((good * 100) / this.totalFeedback(this.state));

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.totalFeedback(this.state)}
            positivePercentage={this.feedbackPercentage(this.state)}
          />
        </Section>
      </div>
    );
  }
}

export default App;
