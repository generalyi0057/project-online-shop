import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsPersonPlusFill } from 'react-icons/bs';

import { fetchAPI } from "../app/api";

// TODO: show message
// success: show login link to
// error:

const Signup = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signUpOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(false);
    const data = new FormData(event.currentTarget);
    const params = {
      username: data.get("username"),
      password: data.get("password")
    };
    console.log(params);
    if(params.username !== "" && params.password !== "") {
      const instance = fetchAPI("signup", params);
      instance.then(res => {
        console.log(res);
      });
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center">
      <Form className="w-25 mt-5" onSubmit={signUpOnSubmit}>
        <div className="text-center">
          <BsPersonPlusFill className="p-2 fs-2 rounded-circle text-light bg-primary" />
          <h4 className="mt-3 mb-3">Sign Up</h4>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            required
          />
          <Form.Control.Feedback type="invalid">
            Invalid username.
          </Form.Control.Feedback>
          {/*<Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>*/}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button className="w-100 mt-3" variant="primary" type="submit">
          SIGN UP
        </Button>
      </Form>
    </Container>
  );
}
export default Signup;
