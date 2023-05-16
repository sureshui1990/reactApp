import React, { Component } from "react";
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        componentDidMount() {
            this.shouldNavigateAwayIfUserNotLoggedIn();
        }

        componentDidUpdate(){
            this.shouldNavigateAwayIfUserNotLoggedIn();
        }

        shouldNavigateAwayIfUserNotLoggedIn = () => {
            if(!this.props.hasAuth){
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props} />
        }
    }

    const mapStateToProps = state => {
        return {
            hasAuth: state.auth.isLoggedIn
        }
    }
    return connect(mapStateToProps, null)(ComposedComponent);
}