import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal, Button, Form } from "react-bootstrap";

const AddressSearch = ({ setAddress }: { setAddress: (address: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);

    // 주소 검색 완료 시
    const handleComplete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }

        setAddress(fullAddress);
        setIsOpen(false);
    };

    return (
        <>
            <Button variant="outline-primary" className="h-120" onClick={() => setIsOpen(true)}>
                우편번호 검색
            </Button>

            <Modal show={isOpen} onHide={() => setIsOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>우편번호 검색</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DaumPostcode onComplete={handleComplete} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddressSearch;
