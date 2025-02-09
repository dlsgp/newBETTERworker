import React, { useState } from 'react';
import '../styles/find.css';
import { Container, Row, Col, Stack, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Tabs, Tab, Typography, TextField } from '@mui/material';

const FindPW3: React.FC = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(1);
    const [email, setEmail] = useState('email12345@gmail.com');
    const [codeSent, setCodeSent] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleSendCode = () => {
        setCodeSent(true);
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
                            <Typography className="emailTypo">이메일 인증</Typography>
                            <Typography className="emailCom" sx={{ textAlign: "center" }}>{email}</Typography>

                            <div className="pwStack">
                                <Button
                                    className="ButtonCode"
                                    style={{ backgroundColor: codeSent ? '#474747' : '#E7E7E7'}}
                                    disabled={codeSent}
                                    onClick={handleSendCode}
                                >
                                    코드 보내기
                                </Button>
                            </div>

                            {codeSent && (
                                <Stack spacing={1} alignItems="center">
                                    <TextField
                                        label="인증번호"
                                        variant="outlined"
                                        fullWidth
                                        value={verificationCode}
                                        onChange={(e) => setVerificationCode(e.target.value)}
                                    />
                                    <Typography variant="body2" color="textSecondary">인증번호를 전송하였습니다.</Typography>
                                </Stack>
                            )}

                            <div>
                            </div>

                            <Button variant="primary" className="ideButton">인증</Button>

                        </Stack>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default FindPW3;