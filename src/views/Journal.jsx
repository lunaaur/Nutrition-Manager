const React = require('react');
const Layout = require('./Layout');

module.exports = function Journal({ user, dishes }) {
  return (
    <Layout user={user}>
      <div className="account-block">
        <div className="addRec">
          <a className="btn btn-primary" href="/usersrecepies/createrecipe" id="add-btn">Add Dish</a>
        </div>
        <h4>My Nutrition</h4>
        <div className="account-container">
          <table className="table-success">
            <thead>
              <tr className="table-success">
                <th scope="col" id="table-line-1">Date</th>
                <th scope="col" id="table-line-2">Dish</th>
                <th scope="col" id="table-line-3">Calories</th>
                <th scope="col" id="table-line-4">Period</th>
              </tr>
            </thead>
            {dishes.map((dish) => (
              <tbody key={dish.id}>
                <tr className="table-success">
                  <hr />
                  <td className="table-success-1">{dish.date.toString()}</td>
                  <td className="table-success-2">{dish.name}</td>
                  <td className="table-success-3">{dish.calories}</td>
                  <td className="table-success-4">{dish.period}</td>
                </tr>
              </tbody>
            ))}
          </table>
          {/* <div className="dishes">
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
               {' '}
                <button type="button" id={dish.id} className="btn btn-danger del-btn">Delete</button>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </Layout>
  );
};
