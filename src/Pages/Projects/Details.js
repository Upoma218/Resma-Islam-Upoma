import React from 'react';

const Details = ({ i }) => {
    const { img, name, details } = i;
    console.log(i.img)
    return (
        <div className="card shadow-xl mb-12 bg-sky-900">
            <div className="card-body items-center text-center bg-neutral rounded-tl-2xl rounded-tr-2xl">
                <h2 className="card-title">{name}</h2>
                <ul className="list-inside list-disc">{details && details.map((f, i) => <li key={i}>{f}</li>)}</ul>
            </div>
            <figure>
                <img src={img} alt="" />
            </figure>
            
        </div>
    );
};

export default Details;

