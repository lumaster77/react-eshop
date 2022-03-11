import React, { Children } from 'react';

const layout = ({children}) => {
    return (
        <div className="Layout">
            {children}
        </div>
    );
}

export default layout;