import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class UserList extends Component {
    createUserList(){
        return this.props.users.map(user => {
                return(<li key = {user.id}>{user.first} {user.last}</li>);
            });
    }
    render(){
        return(
            <ul>
                {this.createUserList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(UserList);