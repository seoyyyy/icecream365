import React from 'react';
import DaumPostcode from "react-daum-postcode"; 

const SelectAddrDialog = ({close,handleChangeAddr}) => {
    
    return (
            <div className="modal post-code">
                <div className="modal-header">
                    <span className="modal-close" onClick={close}>닫기</span>
                </div>
                <div className="modal-body">
                    <DaumPostcode  onComplete={handleChangeAddr} />
                </div>
            </div>
    )
}

export default SelectAddrDialog;