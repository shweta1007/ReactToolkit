import { Button, Col, Form, Row } from "react-bootstrap";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo, fetchTodos, updateTodo } from "../Redux/api";

function Home() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({ title: "", completed: false });
  const { todos, status } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const handleCreateTodo = async (event) => {
    event.preventDefault();
    try {
      console.log(newTodo);
      const { payload: status } = await dispatch(createTodo(newTodo));
      if (status === 201) {
        dispatch(fetchTodos());
      }
    } catch (error) {
      console.error("Failed to create todo: ", error);
    }
  };

  const handleUpdateTodo = async (event) => {
    event.preventDefault();
    try {
      const { payload: status } = await dispatch(
        updateTodo({ title: "updated todo", completed: true, id: 1 })
      );
      console.log(status, "sttaus is jer");
      if (status === 200) {
        dispatch(fetchTodos());
      }
    } catch (error) {
      console.error("Failed to create todo: ", error);
    }
  };

  const handleDeleteTodo = async (event) => {
    event.preventDefault();
    try {
      const { payload: status } = await dispatch(deleteTodo(1));
      if (status === 200) {
        dispatch(fetchTodos());
      }
    } catch (error) {
      console.error("Failed to create todo: ", error);
    }
  };

  const ToddosList = () => {
    return todos.map((todo) => {
      return (
        <Row key={todo.id}>
          <Col lg={6}>
            <Form.Group className="lg-3" controlId="formBasicEmail">
              <Form.Text className="text-muted">{todo.title}</Form.Text>
            </Form.Group>
          </Col>
        </Row>
      );
    });
  };

  return (
    <>
      <Form className="">
        <Row>
          <Col lg={6}>
            <Form.Group className="lg-3" controlId="formBasicEmail">
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Form.Group className="lg-3" controlId="formBasicPassword">
              <Form.Label>Toddo</Form.Label>
              <Form.Control
                type="todo"
                placeholder="Password"
                o
                onChange={(e) =>
                  setNewTodo({ ...newTodo, title: e.target.value })
                }
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <Form.Group className="lg-3" controlId="formBasicCheckbox">
              <Form.Check // prettier-ignore
                type="checkbox"
                name="completed"
                checked={newTodo.completed}
                onChange={(e) =>
                  setNewTodo({ ...newTodo, completed: e.target.checked })
                }
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" onClick={handleCreateTodo}>
          Submit
        </Button>
        <Button variant="primary" type="submit" onClick={handleUpdateTodo}>
          update todo
        </Button>
        <Button variant="primary" type="submit" onClick={handleDeleteTodo}>
          delete todo
        </Button>
      </Form>
      <ToddosList />
    </>
  );
}

export default Home;
