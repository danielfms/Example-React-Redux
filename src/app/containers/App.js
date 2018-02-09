import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { User } from './../components/User';
import { Main } from './../components/Main';
import {setName, setAge} from "../actions/userActions";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={ () => {this.props.setName("Felipe")}}/>
                <User username={this.props.user.name}
                    changeUserAge={ () => {this.props.setAge(30);}}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        user: state.user,
        math: state.math
    };
};

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        setName,
        setAge
    }, dispatch)
    // return {
    //     setName: (name) =>{
    //         dispatch(setName(name))
    //     }
    //};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);