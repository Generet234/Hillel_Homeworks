import React from 'react';
import {Placeholder} from "react-bootstrap";

const Loader = () => {
    const spinner = () => {
        return (
            <>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
            </>
        )
    }
    return (
        <>
            {spinner()}
        </>
    );
};

export default Loader;