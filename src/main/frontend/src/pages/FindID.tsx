import React, { useState } from 'react';
import '../styles/find.css';
import { Container, Row, Col, Stack, Button } from 'react-bootstrap';
import { Tabs, Tab, Theme, useTheme, OutlinedInput, MenuItem, FormControl, Select, SelectChangeEvent, TextField, InputAdornment } from '@mui/material';
import { PersonOutline, AccountCircle, Mail } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import FindPW from './pages/FindPW';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['개인', '사업자'];

const FindID: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [personName, setPersonName] = useState<string>('');
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setPersonName(event.target.value as string);
  };

  return (
    <div className="mainF">
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <Tabs value={value} onChange={handleChange} centered variant="fullWidth" sx={{ marginBottom: '4%' }}>
              <Tab label="아이디 찾기" className="idTitle" />
              <Tab label="비밀번호 찾기" className="idTitle" onClick={() => navigate('/findPW')} />
            </Tabs>
          </Col>
          <Col sm={1}></Col>
        </Row>

        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <Stack gap={4}>
              <div className="p-2">
                <FormControl sx={{ width: '100%', mt: 3 }} >
                  <Select
                    displayEmpty
                    value={personName}
                    onChange={handleSelectChange}
                    input={<OutlinedInput />}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="" disabled>
                      <PersonOutline sx={{ marginRight: 2 }}/><em>회원유형</em>
                    </MenuItem>
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="p-2">
                <TextField
                  id="outlined-basic"
                  label="이름을 입력해주세요"
                  variant="outlined"
                  sx={{ width: '100%' }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="p-2">
                <TextField
                  id="outlined-basic"
                  label="이메일을 입력해주세요"
                  variant="outlined"
                  sx={{ width: '100%' }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <Button variant="primary" size="lg" className="ButtonID" sx={{ marginTop: '4%', padding: 0}} >
                아이디 찾기
              </Button>



            </Stack>
          </Col>
          <Col sm={2}></Col>
        </Row>


      </Container>
    </div>
  );
};

export default FindID;
