import React from 'react';
import TextInputBEM from 'reusable-react-comp-gurdeeps/TextInputBEM';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
    render() {
        return (
            <TextInputBEM
                htmlId="example-error"
                label="First Name"
                name="firstname"
                onChange={() => {}}
                required
                error="First name is required."
            />
        )
    }
}