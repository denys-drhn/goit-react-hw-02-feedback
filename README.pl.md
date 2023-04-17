<!-- first.steps -->

<!-- class Feedback extends Component { state = { good: 0, neutral: 0, bad: 0, };

handleGoodClick = () => { // this.setState(prevState => { return { good:
prevState.good + 1, }; }); this.setState(prevState => ({ good: prevState.good +
1, })); }; handleNeutralClick = () => { this.setState(prevState => ({ neutral:
prevState.neutral + 1 })); }; handleBadClick = () => { this.setState(prevState
=> ({ bad: prevState.bad + 1 })); };

countTotalFeedback = () => { return this.state.good + this.state.neutral +
this.state.bad; };

countPositiveFeedbackPercentage = () => { const total = this.state.good +
this.state.neutral + this.state.bad; const positive = this.state.good; return
Math.round((positive / total) \* 100); };

render() { return ( <section className={css.feedbackSection}>

<h1 className={css.sectionTitle}>Please leave feedback</h1>

        <button
          className={css.feedbackButton}
          type="button"
          onClick={this.handleGoodClick}
        >
          Good
        </button>
        <button
          className={css.feedbackButton}
          type="button"
          onClick={this.handleNeutralClick}
        >
          Neutral
        </button>
        <button
          className={css.feedbackButton}
          type="button"
          onClick={this.handleBadClick}
        >
          Bad
        </button>

        <h2>Statistics</h2>
        <span>Good: {this.state.good}</span>
        <span>Neutral: {this.state.neutral}</span>
        <span>Bad: {this.state.bad}</span>
        <span>Total: {this.countTotalFeedback()}</span>
        <span>
          Positive feedback: {this.countPositiveFeedbackPercentage()}%
        </span>
      </section>
    );

} }

export default Feedback; -->
