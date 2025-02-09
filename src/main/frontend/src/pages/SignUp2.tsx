import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as EditSvg } from "../assets/images/edit.svg";
import { Container, Row, Col, Stack, Button, Form } from 'react-bootstrap';
import '../styles/signUp.css';
import AddressSearch from "../components/AddressSearch.tsx";
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import signup3 from './pages/signUp3';


const SignUp2: React.FC = () => {

    const userType = [
            {value : '개인', label: '개인'},
            {value : '관리자', label: '관리자'},
    ];


    const [showPassword, setShowPassword] = React.useState(false);
    const [showPassword2, setShowPassword2] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
    const handleMouseDownPassword2 = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

    const emailDomains = [
        { value: 'naver.com', label: 'naver.com' },
        { value: 'daum.net', label: 'daum.net' },
        { value: 'gmail.com', label: 'gmail.com' },
        { value: 'kakao.com', label: 'kakao.com' },
        { value: 'hanmail.net', label: 'hanmail.net' },
        { value: 'nate.com', label: 'nate.com' },
    ];

    const [address, setAddress] = useState("");



    return (
        <div className="main">
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Stack gap={3}>
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
                                      <div className="circle circleNum completed">
                                        <EditSvg />
                                      </div>
                                      <Stack>
                                        <div className="sText">정보입력</div>
                                      </Stack>
                                    </Col>
                                    <Col xs={6} md={2}>
                                      <div className="circleNum">3</div>
                                      <Stack>
                                        <div className="sText">가입완료</div>
                                      </Stack>
                                    </Col>
                                  </Row>
                                </Container>
                            </div>

                            <Row className="align-items-center" style={{marginBottom: '4%'}}>
                                <Col sm={3} className="sInput">가입자 유형</Col>
                                <Col sm={9}>
                                    <TextField
                                        fullWidth
                                        select
                                        defaultValue="개인"
                                        sx={{ flex: 1 }}
                                        size="small"
                                    >
                                       {userType.map((option) => (
                                           <MenuItem key={option.value} value={option.value}>
                                               {option.label}
                                           </MenuItem>
                                       ))}
                                    </TextField>
                                </Col>
                            </Row>

                            <Row className="align-items-center" style={{ marginBottom: '4%' }}>
                                <Col sm={3} className="sInput">아이디</Col>
                                <Col sm={9}>
                                    <FormControl fullWidth className="sId">
                                        <Input placeholder="아이디 입력" />
                                        <Button variant="outline-primary">중복확인</Button>
                                    </FormControl>
                                </Col>
                            </Row>

                            <Row className="align-items-center" style={{ marginBottom: '4%' }}>
                                <Col sm={3} className="sInput">비밀번호</Col>
                                <Col sm={9}>
                                    <FormControl fullWidth variant="outlined">
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Col>
                            </Row>

                            <Row className="align-items-center" style={{ marginBottom: '4%' }}>
                                <Col sm={3} className="sInput">비밀번호 확인</Col>
                                <Col sm={9}>
                                    <FormControl fullWidth variant="outlined">
                                        <Input
                                            type={showPassword2 ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleClickShowPassword2} onMouseDown={handleMouseDownPassword2}>
                                                        {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Col>
                            </Row>

                           <Row className="align-items-center" style={{ marginBottom: '4%' }}>
                                <Col sm={3} className="sInput">이메일</Col>
                                    <Col sm={9}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%" }}>

                                            <FormControl sx={{ flex: 1  }}>
                                                <Input placeholder="이메일" sx={{ height: '40px', width: '100%' }} />
                                            </FormControl>
                                            <div>@</div>


                                            <TextField
                                                select
                                                defaultValue="naver.com"
                                                sx={{ flex: 1 }}
                                                size="small"
                                            >
                                                {emailDomains.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>

                                        </div>
                                    </Col>
                            </Row>

                            <Row className="align-items-center" style={{ marginBottom: '4%' }}>
                                <Col sm={3} className="sInput">성명</Col>
                                <Col sm={9}>
                                    <FormControl fullWidth>
                                        <Input />
                                    </FormControl>
                                </Col>
                            </Row>

                            <Row className="align-items-center" style={{ marginBottom: '4%' }}>
                                <Col sm={3} className="sInput">대표자 성명</Col>
                                <Col sm={9}>
                                    <FormControl fullWidth>
                                        <Input />
                                    </FormControl>
                                </Col>
                            </Row>

                            <Row className="align-items-center" style={{ marginBottom: '4%' }}>
                                <Col sm={3} className="sInput">주민번호</Col>
                                    <Col sm={9}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%" }}>

                                            <FormControl sx={{ flex: 1  }}>
                                                <Input placeholder="주민번호 앞 6자리"/>
                                            </FormControl>
                                            <div>-</div>
                                            <FormControl sx={{ flex: 1  }}>
                                                <Input type="password"
                                                 autoComplete="current-password"
                                                 variant="standard"/>
                                            </FormControl>

                                        </div>
                                    </Col>
                            </Row>

                            <Row className="align-items-center" style={{ marginBottom: '4%' }}>
                                <Col sm={3} className="sInput">사업자번호</Col>
                                    <Col sm={9}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%" }}>

                                            <FormControl sx={{flex:1}}>
                                                <Input />
                                            </FormControl>
                                            <div></div>
                                            <FormControl sx={{flex:1}}>
                                                <Input />
                                            </FormControl>
                                            <div></div>
                                            <FormControl sx={{flex:1}}>
                                                <Input />
                                            </FormControl>
                                            <div></div>

                                        </div>
                                    </Col>
                            </Row>

                            <Row className="align-items-center" style={{ marginBottom: '4%' }}>
                                <Col sm={3} className="sInput">주소</Col>
                                <Col sm={9}>
                                    <div className="d-flex mb-2" style={{ gap: "8px" }}>
                                        <Form.Control className="h-120" value={address} disabled />
                                        <AddressSearch setAddress={setAddress} />
                                    </div>

                                    <FormControl fullWidth variant="standard" className="mb-2" style={{marginBottom: '3%'}}>
                                        <Input placeholder="상세주소"/>
                                    </FormControl>

                                </Col>
                            </Row>

                            <Row className="align-items-center" style={{ marginBottom: '4%' }}>
                                <Col sm={3} className="sInput">전화번호</Col>
                                <Col sm={9}>
                                    <FormControl fullWidth>
                                        <Input />
                                    </FormControl>
                                </Col>
                            </Row>

                            <div className="sNext">
                                <Button size="lg" className="sNextButton">
                                    <Link to="/signup3" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        다음
                                    </Link>
                                </Button>
                            </div>



                        </Stack>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp2;
