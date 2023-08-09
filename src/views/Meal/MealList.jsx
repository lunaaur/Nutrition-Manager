const React = require('react');

const Layout = require('../Layout');

module.exports = function MealList({ user, meals, nutrients }) {
  return (
    <Layout user={user}>
      <div className="card">
        <div className="card-body">
          {meals.map((meal) => (
            <div className="card-area">
              <img src={meal.sourceUrl.image} className="card-img-top" alt="..." />
              <h5 className="card-title">{meal.title}</h5>
            </div>
          ))}
          {nutrients.map((nutrient) => (
            <div className="nutrients-block">
              <p className="card-text">
                Calories:
                {' '}
                {nutrient.calories.toFixed(0)}
              </p>
              <p className="card-text">
                Carbohydrates:
                {' '}
                {nutrient.carbohydrates.toFixed(0)}
              </p>
              <p className="card-text">
                Fat:
                {' '}
                {nutrient.fat.toFixed(0)}
                {' '}
              </p>
              <p className="card-text">
                Protein:
                {' '}
                {nutrient.protein.toFixed(0)}
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          ))}
        </div>
      </div>

    </Layout>
  );
};
