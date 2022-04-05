function Signup() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="password"
            />
          </div>
  
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="password"
            />
          </div>
  
          <div>
            <label htmlFor="repeat_password">Confirm password</label>
            <input
              type="password"
              id="repeat_password"
              name="repeat_password"
              autoComplete="password"
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
  
  export default Signup;