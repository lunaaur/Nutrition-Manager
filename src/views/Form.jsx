const React = require('react');
const Layout = require('./Layout');

module.exports = function Form({ user }) {
  return (
    <Layout user={user}>
      <div className="form-block">
        <div className="form-container">
          <form method="POST" action="/usersrecepies" id="form-add">
            <div className="mb-3">
              <label htmlFor="exampleInputText1" className="form-label">Date</label>
              <input type="date" className="form-control" id="exampleInputText1" aria-describedby="time" name="date" />
            </div>
            <div className="mb-3">
              <select className="form-select" aria-label="Default select example" id="select" name="period">
                <option selected value="Breakfast">Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </select>
            </div>
            {/* <div className="mb-3">
              <label htmlFor="exampleInputText1" className="form-label">Time (min)</label>
              <input type="number" className="form-control" id="exampleInputText1" aria-describedby="time" name="time" />
            </div> */}
            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputName1" aria-describedby="name" name="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputText2" className="form-label">Calories</label>
              <input type="number" className="form-control" id="exampleInputName2" aria-describedby="description" name="calories" />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="exampleInputText2" className="form-label">Description</label>
              <input type="text" className="form-control" id="exampleInputName2" aria-describedby="description" name="description" maxLength="1000" />
            </div> */}
            <button type="submit" className="btn btn-primary n">Add</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
