import { noop } from "lodash-es";
import React from "react";
import { connect } from "react-redux";
import { BoxGroupHeader, BoxGroupSection, Button, Input, InputGroup, InputLabel, PasswordInput } from "../base";
import { createFirstUser } from "../users/actions";
import { WallContainer, WallDialog, WallDialogFooter } from "./Container";

export class FirstUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.username, this.state.password);
    };

    render() {
        const { username, password } = this.state;
        return (
            <WallContainer>
                <WallDialog size="lg">
                    <BoxGroupHeader>
                        <h2>Setup User</h2>
                        <p>Create an initial administrative user to start using Virtool.</p>
                    </BoxGroupHeader>
                    <form onSubmit={this.handleSubmit}>
                        <BoxGroupSection>
                            <InputGroup>
                                <InputLabel>Username</InputLabel>
                                <Input name="username" value={username} onChange={this.handleChange} />
                            </InputGroup>
                            <InputGroup>
                                <InputLabel>Password</InputLabel>
                                <PasswordInput name="password" value={password} onChange={this.handleChange} />
                            </InputGroup>
                        </BoxGroupSection>
                        <WallDialogFooter>
                            <Button type="submit" icon="user-plus" color="blue">
                                Create User
                            </Button>
                        </WallDialogFooter>
                    </form>
                </WallDialog>
            </WallContainer>
        );
    }
}

export const mapDispatchToProps = dispatch => ({
    onSubmit: (username, password) => {
        dispatch(createFirstUser(username, password));
    }
});

export default connect(noop(), mapDispatchToProps)(FirstUser);
