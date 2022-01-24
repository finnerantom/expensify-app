// Higher Order Component (HOC) - a component (HOC) that renders another component.
//  Reuse code
//  Render hijacking
// Prop manipulation
// Abstract state 

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <div>
                    <p>Please log in to see details!</p>
                </div>
            )}
        </div>
    );
};
const AuthInfo = requireAuthentication(Info)
const AdminInfo = withAdminWarning(Info)

//ReactDOM.render(<AdminInfo isAdmin={true} info="these are the details" />, document.getElementById('app') )
ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the details" />, document.getElementById('app'))
