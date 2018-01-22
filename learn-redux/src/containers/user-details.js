import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component {
    render() {
        return (<div> {this.props.user.description} </div>);
    }

}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetails);

