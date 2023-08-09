const React = require('react');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <script defer src="js/recipe.js" />
        <title>Nutrition Manager</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
        <link href="/css/style.css" rel="stylesheet" />
      </head>
      <body>
        <header>
          <nav className="navbar navbar-expand-lg bg-red" id="links">
            { user ? (
              <div className="container-fluid">
                <h4 className="greeting">
                  Welcome,
                  {' '}
                  { user }
                  {' '}
                  !
                </h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav2">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="/home">Main Page</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/journal">My Journal</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/logout">Log Out</a>
                    </li>
                   {/*  <li className="nav-item">
                      <a className="nav-link" href="/usersrecepies">Our Users Recepies</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="/home">Main Page</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/login">Log In</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/register">Register</a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="/usersrecepies">Our Users Recepies</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            )}
          </nav>
        </header>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />
      </body>
    </html>
  );
};