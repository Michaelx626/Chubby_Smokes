import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_USER } from "../../utils/mutation";
import Auth from "../../utils/auth";
import { Container, Row, Col } from "react-bootstrap";

function SignUp() {
  const [formState, setFromState] = useState({
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });

      const token = response.data.addUser.token;
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main>
      <div className="sign-wrap">
        <Container>
          <h1>Sign Up to Chubby Smoke</h1>
          <Row className="justify-content-center">
            <Col xs={12} sm={8} md={6} lg={4}>
              <div className="login-box text-center">
                <form className="loginForm" onSubmit={handleFormSubmit}>
                  <label htmlFor="email">
                    <b>Email Address:</b>
                  </label>
                  <input
                    className="email shadow-sm"
                    type="text"
                    placeholder="youremail@chubbysmoke.com"
                    name="email"
                    id="email"
                    required
                    onChange={handleChange}
                  />
                  <label htmlFor="password">
                    <b>Password</b>
                  </label>
                  <input
                    className="password shadow-sm"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    id="pwd"
                    required
                    onChange={handleChange}
                  />
                  <button className="shadow btn-Submit loginBtn" type="submit">
                    Sign Up
                  </button>
                </form>
                <p className="signInBtn-text">
                  Returning User? 
                  <Link to="/login"> Login</Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default SignUp;
