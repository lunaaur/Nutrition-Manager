const React = require('react');

const Layout = require('../Layout');

module.exports = function MealPlan({ user }) {
  return (
    <Layout user={user}>
      <div className="plan-container">
        { user ? (
          <div className="plan">
            <div className="plan-controls-container">
              <section className="plan-controls">
                <input type="number" className="form-control" id="calories-input" aria-describedby="ingredient" placeholder="Calories (e.g. 2000)" name="calories" />
                <input type="text" className="form-control" id="exclude-input" aria-describedby="exclude" placeholder="exclude" name="exclude" />
                <select class="form-select" aria-label="Default select example" id="select">
                  <option>Gluten Free</option>
                  <option>Vegetarian</option>
                  <option>Lacto-Vegetarian</option>
                  <option>Ovo-Vegetarian</option>
                  <option>Vegan</option>
                  <option>Pescetarian</option>
                  <option selected value="Whole30">Whole30</option>
                </select>
                <a href="#" className="btn btn-primary" id="find">Get</a>
                {/*                 <button type="submit" className="btn btn-primary" id="save">Save</button> */}
              </section>
            </div>
          </div>
        ) : (
          <div className="plan">
          <div className="plan-controls-container">
            <section className="plan-controls">
              <input type="number" className="form-control" id="calories-input" aria-describedby="ingredient" placeholder="Calories (e.g. 2000)" name="calories" />
              <input type="text" className="form-control" id="exclude-input" aria-describedby="exclude" placeholder="exclude" name="exclude" />
              <select class="form-select" aria-label="Default select example" id="select">
                <option>Gluten Free</option>
                <option>Vegetarian</option>
                <option>Lacto-Vegetarian</option>
                <option>Ovo-Vegetarian</option>
                <option>Vegan</option>
                <option>Pescetarian</option>
                <option selected value="Whole30">Whole30</option>
              </select>
              <a href="#" className="btn btn-primary" id="find">Get</a>
            </section>
          </div>
        </div>
        )}
      </div>
    </Layout>
  );
};
