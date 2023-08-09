const React = require('react');
const Layout = require('./Layout');

module.exports = function SavedResepies({ user, dishes }) {
  return (
    <Layout user={user}>
      <div className="account-container">
        {dishes.map((dish) => (
          <div className="card" key={dish.id} data-bidid={dish.id}>
            <div className="card-body">
              <p className="card-text">{dish.dish}</p>
              <p className="card-text">{dish.servings}</p>
              <p className="text">Recipe: </p>
              <a href={dish.sourceUrl} class="btn btn-primary">Go to recipe</a>
              <div className="btn-group animal-cards-buttons">
                <button type="button" id={dish.id} className="btn btn-danger del-btn" name="dlt">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
