import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { User } from './../components/User';
import { Main } from './../components/Main';
import {setName, setAge} from "../actions/userActions";
import {subtractNumber} from "../actions/mathActions";
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={ () => {this.props.setName("Felipe")}}/>
                <User username={this.props.user.name}
                    changeUserAge={ () => {this.props.setAge(30);
                        //Test socketListener in several files
                        this.props.subtractNumber(45).then((result) => {
                            console.log("Promise answer: ", result);
                        });
                    }}
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
    // return bindActionCreators({
    //     setName,
    //     setAge,
    //     subtractNumber
    // }, dispatch)
    return {
        setName: (name) =>{
            dispatch(setName(name))
        },
        setAge: (age) =>{
            dispatch(setAge(name))
        },
        subtractNumber: (number) => {
            return dispatch(subtractNumber(number));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);