const React = require('react');
const Layout = require('./Layout');

module.exports = function Bot({ user }) {
  return (
    <Layout user={user}>
      <div className="main-container">
        <div className="ingredients-container">
          <form method="POST" action="/home" id="form">
            <div className="ingredient-title">
              <h3 className="bot-title">Ask your question</h3>
            </div>
            <div className="bot-description">
              <p className="bot-description-text">e.g. calories/fat/carbohydrates/protein in ... in ... servings</p>
            </div>
            <div className="ingredient-FORM">
              <input type="text" className="form-control" id="bot-input" aria-describedby="ingredient" />
              <button type="submit" className="btn btn-primary" id="ask-btn">Ask</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
