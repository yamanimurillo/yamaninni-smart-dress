import React from "react";

import "./signin.styles.scss";

import FormInput from "../../components/form-input/form-input.component";

import CustomButton from "../../components/custom-button/custom-button.component";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import SignUp from "../../components/signup/signup.component";

class SignInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }

    };

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <div className="sign-in-and-sign-up ">
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
                            <CustomButton type="submit" onSubmit={this.handleSubmit}>Sign in</CustomButton>

                            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Google sign in</CustomButton>
                        </div>

                    </form>
                </div>
                <SignUp></SignUp>
            </div>
        );
    };
}

export default SignInPage;