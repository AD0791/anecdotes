import React from 'react';

function Button({handler, text}) {
    return (
        <div>
            <button onClick={handler}>{text}</button>
        </div>
    );
}

export default Button;