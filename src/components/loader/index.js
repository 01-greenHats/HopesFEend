import React from 'react';
import './loader.scss'


export default function Header() {

    return (
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    );
}