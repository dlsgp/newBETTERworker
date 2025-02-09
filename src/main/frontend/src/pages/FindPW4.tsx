import React, { useState } from 'react';
import '../styles/find.css';
import { Container, Row, Col, Stack, Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Tabs, Tab, Typography, TextField } from '@mui/material';
import {Lock } from '@mui/icons-material';


const FindPW4: React.FC = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <div className="mainF">
            <Container>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Tabs value={value} onChange={handleChange} centered variant="fullWidth" sx={{ marginBottom: '4%' }}>
                            <Tab label="아이디 찾기" className="idTitle" onClick={() => navigate('/find')} />
                            <Tab label="비밀번호 재 설정" className="idTitle" />
                        </Tabs>
                    </Col>
                    <Col sm={1}></Col>
                </Row>

                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Stack gap={4}>
                            <Typography className="emailTypo">비밀번호 재 설정</Typography>
                            <div></div>
                            <Form>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon"><Lock /></InputGroup.Text>
                                    <Form.Control
                                      type="password"
                                      placeholder="새 비밀번호"
                                      aria-label="pw"
                                      aria-describedby="basic-addon"
                                    />
                                </InputGroup>
                            </Form>

                            <Form>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon2"><Lock /></InputGroup.Text>
                                    <Form.Control
                                      type="password"
                                      placeholder="새 비밀번호 확인"
                                      aria-label="pw"
                                      aria-describedby="basic-addon2"
                                    />
                                </InputGroup>
                            </Form>

                            <Button className="ideButton">비밀번호 재 설정</Button>



                        </Stack>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default FindPW4;