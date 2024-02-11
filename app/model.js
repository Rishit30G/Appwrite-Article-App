import React from 'react'
import { Client, Databases, ID } from 'appwrite'
import Swal from 'sweetalert2'


const Modal = ({setShowModal}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
     const title = e.target.title.value
     const content = e.target.content.value
     const slug = e.target.slug.value
     const views = e.target.views.value
     const author = e.target.author.value

     //Make a JSON of the form data
      const blog = {
        Title: title,
        Content: content,
        Slug: slug,
        Views: views,
        Author: author,
      }

        const client = new Client();
        const databases = new Databases(client);
      
      client
          .setEndpoint('https://cloud.appwrite.io/v1')
          .setProject('65c6ee5830858a4387ed');
      

      const formDataJsonString = JSON.stringify(blog);
      console.log(formDataJsonString);
      
      databases.createDocument(
        "65c6f181cd817b9e35f5",
        "65c6f1921355c5755440",
        ID.unique(), 
        formDataJsonString,
      ).then(function (response) {
        console.log(response);
      }, function (error) {
        console.log(error);
      });
      setShowModal(false)

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Successfully added a new blog post!"
      });

   }

   
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
    <div className="bg-white p-5 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-semibold mb-4">Enter Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input type="text" name="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
          <textarea name="content" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Slug</label>
          <input type="text" name="slug" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Views</label>
          <input type="number" name="views" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Author</label>
          <input type="text" name="author" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
          <button className="bg-transparent hover:bg-gray-200 text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded" type="button" onClick={() => setShowModal(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Modal