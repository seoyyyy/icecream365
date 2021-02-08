import React, { Component} from 'react';
import Modal from 'react-awesome-modal';

class forgot_username extends Component {
    render() {
        return (
            <div>
                <Modal visible={this.props.forgot_username_modal}
                       width="400" height="380"
                       effect="fadeInDown" >
                           아이디 찾기
                       </Modal>
            </div>
        )
    }
}

export default forgot_username;
