const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <div className="registration-container">
        <form method="POST" action="/register" className="regi" id="form-registration">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputLogin1" className="form-label">Login</label>
            <input type="text" className="form-control" id="exampleInputLogin1" aria-describedby="emailHelp" name="login" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
          </div>
          <button type="submit" id="btn" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </Layout>
  );
};