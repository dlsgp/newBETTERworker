import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { ReactComponent as UserSVG } from "../assets/images/user.svg";
import { ReactComponent as LockSVG } from "../assets/images/lock.svg";
import signUp from './pages/signUp';

const Login: React.FC = () => {
    return (
        <div className="main">
           <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Stack gap={6}>
                            <div className="pTitle">BETTERworker</div>
                            <div className="pInput">
                                <Form>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><UserSVG /></InputGroup.Text>
                                        <Form.Control
                                          type="text"
                                          placeholder="아이디를 입력해주세요."
                                          aria-label="id"
                                          aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon2"><LockSVG /></InputGroup.Text>
                                        <Form.Control
                                          type="password"
                                          placeholder="비밀번호를 입력해주세요."
                                          aria-label="pw"
                                          aria-describedby="basic-addon2"
                                        />
                                    </InputGroup>
                                </Form>
                            </div>
                            <div className="pOr">
                                <Form className="login-check">
                                  {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                      <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={`로그인 유지하기`}
                                      />
                                    </div>
                                  ))}
                                </Form>
                            </div>
                            <div className="pSns">OR</div>
                            <div className="pLoginButton">
                                <div className="d-grid gap-4">
                                  <Container>
                                      <Row className="snsButtons">
                                        <Col className="login-col">
                                            <Button className="btn btn-custom">구글 로그인</Button>
                                              </Col>
                                        <Col className="login-col">
                                            <Button className="btn btn-custom">카카오 로그인</Button>
                                        </Col>
                                      </Row>
                                  </Container>
                                  <Button variant="primary" size="lg" className="primaryButton">
                                    로그인
                                  </Button>
                                </div>
                            </div>
                            <div className="pSign">
                                <Container>
                                    <Row>
                                        <Col>
                                            계정이 없으신가요?
                                            <Link to="/signup"> 회원가입하기</Link>
                                        </Col>
                                        <Col className="right">
                                            <Link to="/lose"> 아이디 / 비밀번호를 잊으셨나요?</Link>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Stack>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
           </Container>
        </div>
    );
}

export default Login;
