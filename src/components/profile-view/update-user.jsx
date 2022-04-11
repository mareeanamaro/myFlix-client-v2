import React from "react";
import { Form, Button, Row, Col, CardGroup, Card } from 'react-bootstrap';
import '../profile-view/profile-view.scss';

function UpdateInfo({ setUsername, setPassword, setEmail, setBirthday, updateUserData, user }) {

    return (
        <>
            <Row className="m-2 mx-auto">
                <Col>
                    <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Title className="title">Update your information:</Card.Title>
                                <Form>
                                    <Form.Group controlId="formUsername">
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Username"
                                            placeholder='Enter your desired username'
                                            value={user.Username}
                                            onChange={e => setUsername(e)}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formPassword">
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder='Your password must be 8 or more characters long'

                                            onChange={e => setPassword(e)}
                                            minLength={8}

                                        />

                                    </Form.Group>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={user.Email}
                                            onChange={e => setEmail(e)}
                                            placeholder='Enter your email address' />
                                    </Form.Group>

                                    <Form.Group controlId="updateBirthday">
                                        <Form.Label>Birthday:</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="birthday"
                                            value={user.Birthday}
                                            onChange={e => setBirthday(e)}
                                        />

                                    </Form.Group>
                                    <Button className="button-profile" type="button" onClick={updateUserData}>Update Info</Button>

                                </Form>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </>)
}

export default UpdateInfo;