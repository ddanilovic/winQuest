import React from "react";
import logo from "../assets/logo.png";

function LoginForm({ error, disabled, details, setDetails, submitHandler }) {
  return (
    <main>
      <form onSubmit={submitHandler}>
        <section className="container">
          <img src={logo} alt="logo" className="logo" />
          <div className="form-group">
            <input
              type="text"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
              placeholder="user"
              className="form-control"
            />
            <input
              type="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
              placeholder="password"
              className="form-control"
            />
            {error !== "" ? <div className="form-error">{error}</div> : ""}
          </div>
          <button type="submit" className="btn" disabled={disabled}>
            submit
          </button>
        </section>
      </form>
    </main>
  );
}

export default LoginForm;
