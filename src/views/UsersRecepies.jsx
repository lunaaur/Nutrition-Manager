const React = require('react');
const Layout = require('./Layout');

module.exports = function UsersRecepies({ user, dishes }) {
  return (
    <Layout user={user}>
      <div className="users-container">
        { user ? (
          <div className="dishes">
           {/*  <div className="addRec">
              <a className="btn btn-primary" href="/usersrecepies/createrecipe">Add Recipe</a>
            </div> */}
            {dishes.map((dish) => (
              <div className="card-body" id="card-body">
                <div className="card-area">
                  <h5 className="card-title">{dish.name}</h5>
                </div>
                <p className="card-text">
                  Preparation time:
                  {dish.time}
                  min
                </p>
                <p className="card-text">
                  Description:
                  {dish.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="dishes">
            {dishes.map((dish) => (
              <div className="card-body" id="card-body">
                <div className="card-area">
                  <h5 className="card-title">{dish.name}</h5>
                </div>
                <p className="card-text">
                  Preparation time:
                  {dish.time}
                  min
                </p>
                <p className="card-text">
                  Description:
                  {dish.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};
