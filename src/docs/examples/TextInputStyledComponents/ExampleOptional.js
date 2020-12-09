import React from 'react';
import TextInputStyledComponents from 'reusable-react-comp-gurdeeps/TextInputStyledComponents';

/** Optional TextBox */
export default class ExampleOptional extends React.Component {
    render() {
        return (
            <TextInputStyledComponents
                htmlId="example-optional"
                label="First Name"
                name="firstname"
                onChange={() => {}}
            />
        )
    }
}