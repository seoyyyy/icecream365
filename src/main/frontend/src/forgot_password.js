import React, { Component} from 'react';
import Modal from 'react-awesome-modal';

class forgot_password extends Component {
    render() {
        return (
            <div>
                <Modal visible={this.props.forgot_password_modal}
                       width="400" height="380"
                       effect="fadeInDown" >
                           비밀번호 찾기
                       </Modal>
            </div>
        )
    }
}

export default forgot_password;
