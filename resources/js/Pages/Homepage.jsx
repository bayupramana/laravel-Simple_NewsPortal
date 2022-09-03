import React from "react";
import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-200">
      <Head title={props.title}/>
      <div>
        {props.news ? props.news.map((data, i) => {
          return (
            <div key={i} className="p-4 m-2 bg-white text-black">
              <p className="text-2x">{data.title}</p>
              <p>{data.description}</p>
              <p className="text-sm">{data.category}</p>
              <p className="text-sm">{data.author}</p>
            </div>
          )
        }) : <p>News Doesnt Available Now</p> }
      </div>
    </div>
  )
}