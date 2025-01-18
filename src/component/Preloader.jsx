import React from "react";

export const Preloader = () => {
    return(
        <div className="preloader-wrapper activity">
            <div className="spinner-layer spinner-blue">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div>
                <div className="gap-path">
                    <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                <div className="circle"></div>
                </div>
            </div>
        </div>
    );
};