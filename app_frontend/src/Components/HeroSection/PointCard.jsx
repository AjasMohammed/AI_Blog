import React from "react";

function PointCard({ content }) {
    return (
        <div className="point-card text-primary bg-secondary flex flex-col justify-center rounded-2xl px-3 max-w-90 min-h-40 hover:bg-primary hover:text-secondary transition">
            <h5 className="text-left font-extrabold text-2xl">{content.title}</h5>
            <p className="text-lg font-semibold pl-4"> - {content.description}</p>
        </div>
    );
}

export default PointCard;
