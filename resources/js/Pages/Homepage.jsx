import React from "react";
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from "@/Components/Navbar";
import NewsLists from "@/Components/Homepage/NewsList";
import Footer from "@/Components/Footer";
import Paginator from "@/Components/Homepage/Paginator";

export default function Homepage(props) {
  return (
    <div className="min-h-screen bg-slate-200">
      <Head title={props.title}/>
      <Navbar user={props.auth.user}/>
      <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:-items-stretch items-center gap-4 p-4 m-3">
        <NewsLists news={props.news.data}/>
      </div>
      <div className="flex justify-center items-center m-4">
        <Paginator meta={props.news.meta}/>
      </div>
      <Footer/>
    </div>
  )
}