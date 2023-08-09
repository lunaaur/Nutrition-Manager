const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ user }) {
  return (
    <Layout user={user}>
      <div className="main-container">
        <div className="section-container">
          <div className="block-1">
            <a href="/recipe" className="btn btn-primary" id="btn-1">Find the recipe!</a>
          </div>
          <div className="block-2">
            <a href="/plan" className="btn btn-primary" id="btn-2">Get Daily Meal Plan!</a>
          </div>
          <div className="block-3">
            <a href="/answer" className="btn btn-primary" id="btn-3">Ask bot the nutrition question!</a>
          </div>
        </div>
        <div className="pear">
        <div className="joke">
          <blockquote className="blockquote-1" maxlength="255">
            <p>Do you want to hear a joke?</p>
          </blockquote>
        </div>
          <img src="icon.png" className="icon" />
        </div>
      </div>
    </Layout>
  );
};
