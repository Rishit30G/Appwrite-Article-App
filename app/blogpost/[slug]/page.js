"use client"
import Navbar from '@/app/Components/Navbar'
import Spinner from '@/app/Components/Spinner';
import { Query, Client, Databases } from 'appwrite';
import React, { useState, useEffect } from 'react';


export default function Page({ params }) {


const [blog, setBlogs] = useState([]);
const [load, setLoad] = useState(true);
useEffect(() => {
  const client = new Client();


client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c6ee5830858a4387ed');

const databases = new Databases(client);

databases.listDocuments(
     "65c6f181cd817b9e35f5",
    "65c6f1921355c5755440",
    [
       Query.equal('Slug', params.slug)
    ]
).then(function (response) {
     setBlogs(response.documents);
     setLoad(false);
}, function (error) {
    console.log(error);
});
}, []);

  return (
    <>
       <Navbar />
       <div>
  {!load ? (
    blog.map((blog) => (
      <div key={blog.$id} className="max-w-xl mx-auto my-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <img className="h-48 w-full" src="https://picsum.photos/440/180" />
            <h1 className="text-2xl font-bold leading-tight text-gray-900 mt-8">{blog.Title}</h1>
            <p className="text-sm italic">~ {blog.Author}</p>
            <p className="mt-3 text-gray-600">{blog.Content}</p>
          </div>
        </div>
      </div>
    ))
  ) : (
    <Spinner/> 
  )}
</div>

    </>
  );
}