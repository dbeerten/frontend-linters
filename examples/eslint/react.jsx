import React from 'react';

function Button({ hidden }) {
    if (hidden) {
        return null;
    }

    return (
        <button>
            Click me!
        </button>
    );
}

Button.defaultProps = {
    hidden: false,
};

function HiddenButton() {
    return (
        <Button
            hidden
        />
    );
}

export default { HiddenButton };
