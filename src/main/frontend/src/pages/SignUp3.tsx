import React from 'react';
import { Container, Row, Col, Form, Stack, Button, InputButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/signUp.css';
import { ReactComponent as CheckCircleSvg } from "../assets/images/check-circle.svg";

const SignUp3: React.FC = () => {
    return (
        <div className="main" style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: 0}}>
            <Container>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Stack gap={5}>
                            <div className="pTitle">BETTERworker</div>
                            <div className="sNum" style={{marginBottom: '10%'}}>
                                <Container>
                                  <Row className="justify-content-center" style={{ gap: '40px' }}>
                                    <Col xs={6} md={2}>
                                      <div className="circleNum">1</div>
                                      <Stack>
                                        <div className="sText">이용약관</div>
                                      </Stack>
                                    </Col>
                                    <Col xs={6} md={2}>
                                      <div className="circleNum">2</div>
                                      <Stack>
                                        <div className="sText">정보입력</div>
                                      </Stack>
                                    </Col>
                                    <Col xs={6} md={2}>
                                      <div className="circle circleNum completed">
                                        <CheckCircleSvg />
                                      </div>
                                      <Stack>
                                        <div className="sText">가입완료</div>
                                      </Stack>
                                    </Col>
                                  </Row>
                                </Container>
                            </div>

                            <div>
                                <div className="SignUpFin">가입이 완료 되었습니다</div>
                                <div className="SignUpFinT">지금 바로 이용하세요</div>
                            </div>

                            <div className="sLogin">
                                <Button size="lg" className="sLoginButton">
                                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        로그인
                                    </Link>
                                </Button>
                            </div>
                        </Stack>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignUp3;
