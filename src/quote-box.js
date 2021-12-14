import React from "react";

class QuoteBox extends React.Component {
  render() {
    return (
      <div>
        <div className="quote-container">
          <p className="quote-text">{this.props.quote}</p>

          <div>
            <img src={this.props.image} />
          </div>
          <div classname="author-section">
            <p className="author-text">{this.props.author}</p>
          </div>

          <button className="quote-button" onClick={this.props.handleClick}>
            Next Quote
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
