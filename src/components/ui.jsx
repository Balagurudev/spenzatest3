import React from 'react';
import '../index.css';

export function Button({
    children,
    variant = 'primary',
    className = '',
    rightIcon = null,
    ...props
}) {
    const baseClass = 'btn';
    const variantClass = `btn-${variant}`;

    return (
        <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
            {children}
            {rightIcon}
        </button>
    );
}

export function Badge({
    children,
    variant = 'dark', // 'dark' or 'light'
    dot = true,
    className = ''
}) {
    return (
        <div className={`pill-badge pill-${variant} ${className}`}>
            {dot && <span className={`dot-indicator ${variant === 'light' ? 'primary' : 'white'}`}></span>}
            {children}
        </div>
    );
}
