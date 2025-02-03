import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Stack, Image, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/signUp.css';
import { ReactComponent as ShieldSvg } from "../assets/images/shield.svg";
import { ReactComponent as RightSvg } from "../assets/images/chevron-right.svg";


const SignUp: React.FC = () => {
    const [showModal, setShowModal] = useState<number | null>(null);
    const handleShowModal = (modalNumber: number) => {
        setShowModal(modalNumber);
    };

    return (
        <div className="main">
            <Container>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Stack gap={8}>
                            <div className="pTitle">BETTERworker</div>
                            <div className="sNum">
                                <Container>
                                  <Row>
                                    <Col xs={6} md={3} />
                                    <Col xs={6} md={2}>
                                      <div className="circle circleNum completed">
                                        <ShieldSvg />
                                      </div>
                                      <Stack>
                                        <div className="sText">이용약관</div>
                                      </Stack>
                                    </Col>
                                    <Col xs={6} md={2}>
                                      <div className="circleNum center">2</div>
                                      <Stack>
                                        <div className="sText">약관동의</div>
                                      </Stack>
                                    </Col>
                                    <Col xs={6} md={2}>
                                      <div className="circleNum">3</div>
                                      <Stack>
                                        <div className="sText">가입완료</div>
                                      </Stack>
                                    </Col>
                                    <Col xs={6} md={3} />
                                  </Row>
                                </Container>
                            </div>

                            <div className="sAll">
                                <Button variant="outline" className="AllButton" size="lg">이용약관에 전체동의</Button>
                            </div>

                             <Stack direction="horizontal" gap={3} className="terms-check">
                               <div className="p-3 sFirst">
                                 <Form>
                                   <Form.Check type="checkbox" id="policy1" label="(필수) 개인정보처리방침" />
                                 </Form>
                               </div>
                               <div className="p-3">
                                 <RightSvg onClick={() => handleShowModal(1)}/>
                               </div>
                             </Stack>

                             <Stack direction="horizontal" gap={3} className="terms-check">
                               <div className="p-3 sSecond">
                                 <Form>
                                   <Form.Check type="checkbox" id="policy2" label="(필수) 개인정보 서비스 및 이용동의" />
                                 </Form>
                               </div>
                               <div className="p-3">
                                 <RightSvg onClick={() => handleShowModal(2)}/>
                               </div>
                             </Stack>

                             <Stack direction="horizontal" gap={3} className="terms-check">
                               <div className="p-3 sThird">
                                 <Form>
                                   <Form.Check type="checkbox" id="policy3" label="(선택) 마케팅 정보 수신 동의" />
                                 </Form>
                               </div>
                               <div className="p-3">
                                 <RightSvg onClick={() => handleShowModal(3)}/>
                               </div>
                             </Stack>

                             <Modal show={showModal === 1} fullscreen onHide={() => setShowModal(null)}>
                                 <Modal.Header closeButton>
                                     <Modal.Title>개인정보처리방침</Modal.Title>
                                 </Modal.Header>
                                 <Modal.Body>
                                    1. 목적<br />
                                      - 본 회사는 회원가입 및 서비스 제공을 위해 회원님의 개인정보를 수집합니다.<br /><br />

                                      2. 수집하는 개인정보의 항목<br />
                                      - 이름, 이메일 주소, 전화번호, 주소 등.<br /><br />

                                      3. 개인정보의 수집 방법<br />
                                      - 회원가입 시, 서비스 이용 시, 고객 문의 시.<br /><br />

                                      4. 개인정보의 보유 및 이용기간<br />
                                      - 회원탈퇴 요청 시 또는 법적 의무가 소멸할 때까지 보유합니다.<br /><br />

                                      5. 개인정보의 제3자 제공<br />
                                      - 이용자의 동의 없이 제3자에게 제공하지 않으며, 법적 요구가 있을 경우를 제외합니다.<br /><br />

                                      6. 개인정보의 안전성 확보 조치<br />
                                      - 개인정보는 암호화하여 안전하게 저장하며, 접근 권한을 제한합니다.<br /><br />

                                      7. 이용자의 권리<br />
                                      - 이용자는 언제든지 자신의 개인정보를 열람, 정정, 삭제 요청할 수 있습니다.<br /><br />

                                      8. 개인정보 처리방침의 변경<br />
                                      - 개인정보 처리방침이 변경될 경우, 홈페이지를 통해 공지합니다.<br /><br />

                                      9. 연락처<br />
                                      - 개인정보 관련 문의는 [이메일] 또는 [전화번호]로 연락 주시기 바랍니다.
                                 </Modal.Body>
                             </Modal>


                            <Modal show={showModal === 2} fullscreen onHide={() => setShowModal(null)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>개인정보 서비스 및 이용동의</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    본인은 [서비스명]의 개인정보 처리방침을 충분히 이해하였으며, 이에 동의합니다.<br/>
                                      본 서비스는 다음과 같은 개인정보를 수집합니다:<br/>
                                      - 필수 정보: 이름, 이메일 주소, 전화번호<br/>
                                      - 선택 정보: 주소, 생년월일, 성별 등<br/>
                                      수집된 개인정보는 다음과 같은 목적으로 사용됩니다:<br/>
                                      - 서비스 제공 및 운영<br/>
                                      - 고객 문의 및 상담 처리<br/>
                                      - 맞춤형 서비스 제공 및 이용 통계 분석<br/>
                                      - 법적 의무 이행 및 분쟁 해결<br/>
                                      개인정보는 서비스 이용 기간 동안 보유하며, 이용 목적이 달성된 후에는 즉시 파기됩니다.<br/>
                                </Modal.Body>
                            </Modal>

                            <Modal show={showModal === 3} fullscreen onHide={() => setShowModal(null)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                          본인은 [서비스명]에서 제공하는 마케팅 정보(이벤트, 프로모션, 뉴스레터 등)를 수신하는 것에 대해 동의합니다.<br/>
                                          수신할 마케팅 정보의 종류:<br/>
                                          - 새로운 서비스 및 제품 정보<br/>
                                          - 특별 이벤트 및 할인 정보<br/>
                                          - 고객 맞춤형 추천 및 혜택<br/>
                                          마케팅 정보는 다음과 같은 방법으로 수신됩니다:<br/>
                                          - 이메일, SMS, 모바일 푸시 알림 등<br/>
                                          수신 동의는 언제든지 철회할 수 있으며, 이를 원하실 경우 고객센터를 통해 요청하실 수 있습니다.<br/>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>여기에 마케팅 정보 수신 동의 내용을 넣으세요.</Modal.Body>
                            </Modal>

                            <div className="sNext">
                                <Button href="/signup2" size="lg" className="sNextButton">다음</Button>
                            </div>
                        </Stack>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
        </div>
        );
    }

export default SignUp;