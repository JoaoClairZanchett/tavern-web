import React, { FunctionComponent } from 'react'
import './button.styles.scss'

interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    onClick?: any;
}

const Button: FunctionComponent<IButtonProps> = ({ onClick, children, ...props }) => {
    return (
        <button className="custom-button" {...props} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button