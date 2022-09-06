import React from "react";
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from "@/Components/Navbar";
import NewsLists from "@/Components/Homepage/NewsList";
import Footer from "@/Components/Footer";

export default function Homepage(props) {
  console.log('props ',props);
  return (
    <div className="min-h-screen bg-slate-200">
      <Head title={props.title}/>
      <Navbar/>
      <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:-items-stretch items-center gap-4 p-4 m-3">
        <NewsLists news={props.news.data}/>
      </div>
      <Footer/>
    </div>
  )
}