import React, { useState } from 'react';
import '../styles/find.css';
import { Container, Row, Col, Stack, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Tabs, Tab, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Typography } from '@mui/material';
import findPW3 from './pages/FindPW3'

const FindPW2: React.FC = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(1);
    const [values, setValues] = useState('email');

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues(event.target.value);
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
                        <Stack gap={6}>
                            <Typography variant="h6" sx={{ mb: '3rem', fontWeight: 'bold' }}>계정확인</Typography>

                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="radio-buttons-group"
                                    name="radio-buttons-group"
                                    value={values}
                                    onChange={handleChanges}
                                >
                                    <FormControlLabel
                                        value="email"
                                        control={<Radio />}
                                        label="이메일 인증 (email12345@gmail.com)"
                                        sx={{ mb: '3rem', p: 1, border: '1px solid #ccc', borderRadius: '8px' }}
                                    />

                                    <FormControlLabel
                                        value="phone"
                                        control={<Radio />}
                                        label="전화번호 인증 (010-1234-5678)"
                                        sx={{ mb: '3rem', p: 1, border: '1px solid #ccc', borderRadius: '8px' }}
                                    />
                                </RadioGroup>
                                <Button variant="primary" size="lg" className="ButtonID" sx={{ marginTop: '4%', padding: 0}}
                                  onClick={() => navigate('/findPW3')}
                                >
                                  계속
                                </Button>
                            </FormControl>
                        </Stack>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default FindPW2;
