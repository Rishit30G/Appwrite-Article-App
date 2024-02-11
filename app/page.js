// import Image from "next/image";

"use client"
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from "react";
import BlogCard from "./Components/BlogCard";
import Navbar from "./Components/Navbar";
import Spinner from "./Components/Spinner";
import Modal from "./model";

export default function Home() {

 const [blogs, setBlogs] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [showModal, setShowModal] = useState(false);
 
useEffect(() => {
  const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c6ee5830858a4387ed');

const databases = new Databases(client);

databases.listDocuments(
     "65c6f181cd817b9e35f5",
    "65c6f1921355c5755440",
   []
).then(function (response) {
     setIsLoading(false);
     setBlogs(response.documents);
}, function (error) {
    console.log(error);
});
}, []);

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center">
  <div className="my-4">
    <button onClick={()=>setShowModal(true)} className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200" >
      Add a post + 
    </button>
    {showModal && <Modal setShowModal={setShowModal}/>}
  </div>
  
  <div className="w-full">
    {!isLoading ? (
     blogs.slice().reverse().map((blog) => (
      <BlogCard key={blog.$id} blog={blog} />
    ))
    ) : (
      <Spinner />
    )}
  </div>
</div>

    </>
  );
}

