const React = require('react');

const Layout = require('./Layout');

module.exports = function Recipe({ user }) {
  return (
    <Layout user={user}>
      <div className="main-container">
        <div className="ingredients-container">
          <form method="POST" action="/home" id="form">
            <div className="ingredient-title">
              <h3 className="recipe-title">What ingredient do you need?</h3>
            </div>
            <div className="ingredient-FORM">
              <input type="text" className="form-control" id="ingredient-input" aria-describedby="ingredient"/>
              <button type="submit" className="btn btn-primary" id="ingredient-btn">Find</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
