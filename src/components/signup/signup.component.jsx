import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './signup.styles.scss';
import FormInput from "../form-input/form-input.component";


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    };

    handleSubmit = async (event) => {        
        event.preventDefault();

        debugger;
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Passwords dont match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });

        } catch (error) {
            console.log(error);
        }
    };

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput label="Display name" name="displayName" value={displayName} handleChange={this.handleChange} type="text" required />
                    <FormInput label="Email" name="email" value={email} handleChange={this.handleChange} type="email" required />
                    <FormInput label="Password" name="password" value={password} handleChange={this.handleChange} type="password" required />
                    <FormInput label="Confirm password" name="confirmPassword" value={confirmPassword} handleChange={this.handleChange} type="password" required />

                    <CustomButton type="submit">Sign up</CustomButton>
                </form>
            </div>
        );
    };
}

export default SignUp;