import React from "react";
import logo from '../assets/logo.png'

function LoginForm({ error, disabled, details, setDetails, submitHandler }) {  
  return (
    <main>
      <form onSubmit={submitHandler}>
        <section className="container">
          <img src={logo} alt="logo" className="logo" />
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={(e) => setDetails({ ...details, email: e.target.value })} //enter value into the state while details typing
              value={details.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })}
              value={details.password}
            />
            {error !== "" ? <div className="error">{error}</div> : ""}
          </div>
          <input type="submit" value="login" disabled={disabled} />
        </section>
      </form>
    </main>
    
  );
}

export default LoginForm;
