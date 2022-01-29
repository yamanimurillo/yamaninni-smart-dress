import React from "react";

import "./signin.styles.scss";

import FormInput from "../../components/form-input/form-input.component";

import CustomButton from "../../components/custom-button/custom-button.component";

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    };

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with you email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        label="Email"
                        name="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}>
                    </FormInput>

                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}>
                    </FormInput>

                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>

                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Google sign in</CustomButton>
                    </div>

                </form>
            </div>
        );
    };
}

export default SignInPage;