"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faBook, faClipboard, faTag } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

const AddCorse = (props: { active: boolean }) => {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [note, setNote] = useState('');
  const [image, setImage] = useState('');
  const [imageUrl,setImageUrl]=useState('')
 
  console.log(props.userInfo);
  
  const uploadImage = async () => {
    const form = new FormData();
    form.append('file', image);
    form.append('upload_preset', 'chila-bila');

    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dh3m2vb3x/upload', form);      
      setImageUrl(res.data.url);
      return res.data.url; // Return the URL for further chaining
    } catch (err) {
      console.log(err);
      return null; // Return null if there was an error
    }
  };

  const handleImageUpload = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.target && (e.target as HTMLInputElement).files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ title, description, category, content, note, imageUrl });
  };
  async function handelCreat(){
    const url = await uploadImage()
    if(url){
        try {
        const result=await axios.post('http://127.0.0.1:5000/api/course/createCourse',{
          title,
          description,
          category,
          content,
          note,
          image:url,   
          instructorId:props.userInfo
        })
        if(result.status===201){
          console.log('course created successfuly');
        }else{
          console.log('creation course failed')
        }
        } catch (error) {
          console.log(error);
    }
  }
}

  return (
    <div>
    <div className={!props.active ?'main-dash-act absolute ' : 'main-dash  absolute '}>
      {/* Hero Section */}
      <div className={props.active?" ml-20 w-1/2 mt-10  flex flex-col items-center justify-center ":"relative ml-44 w-1/2 mt-10  flex flex-col items-center justify-center "}>
          <h1 className="text-4xl font-bold">Add the Course</h1>
          <div className="flex items-center justify-center  ">
          <p className="text-xl mt-2  p-2">Give your best to the world 🏅</p>
          </div>
          </div>
      </div>
      <div className={props.active ?"ml-52 w-1/2":""}>
      <div className={props.active ? "notice-active absolute mt-36 w-1/3 ml-52 p-2 flex items-center justify-center text-center text-[#fff] text-sm bg-[#171a29]":"notice absolute mt-36  w-1/2 ml-44 p-2 flex items-center justify-center text-center text-[#fff] text-sm bg-[#171a29]"}>
        <p className='notice-tit flex items-center'>We encourage everyone to give their best efforts in adding new courses to enhance our offerings.</p>
      </div>

      <div className={props.active? "absolute ml-52 mt-52 w-1/3":"absolute ml-44 mt-52"}>
      <form onSubmit={handleSubmit} className="">
          <div className="flex gap-6">
          <div className="up-input mb-4 ">
            <label className="block mb-2 text-sm font-medium text-gray-900">Course Title</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="flex border p-2.5 rounded-lg w-full outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="flex border p-2.5 rounded-lg w-full outline-none"
              required
            >
              <option value="Math">Math</option>
              <option value="Economy">Economy</option>
              <option value="Management">Management</option>
              <option value="Science">Science</option>
              <option value="History&Geography">History & Geography</option>
              <option value="Art&Literature">Art & Literature</option>
            </select>
          </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="flex border p-2.5 rounded-lg w-full outline-none"
              required
            />
          </div>
          <div className=" flex ">
          <div className="newlink mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">New Link</label>
            <input
              onChange={(e) => setContent(e.target.value)}
              className="flex border p-2.5 rounded-lg w-full outline-none"
              required
            />
          </div>
          <div className="note mb-4   ">
            <label className="block mb-2 text-sm font-medium text-gray-900">Note</label>
            <input
              type="text"
              onChange={(e) => setNote(e.target.value)}
              className="flex  border p-2.5 rounded-lg w-full outline-none"
            />
          </div>
          </div>
          <div className={props.active?"inputs-update flex items-center py-2 mt-2 rounded-lg ml-44 bg-[#171a29] w-36 justify-center":"inputs-update flex items-center py-2 mt-2 rounded-lg ml-72 bg-[#171a29] w-36 justify-center"}>
            <label className="inline-block cursor-pointer">
              <FontAwesomeIcon icon={faUpload} className="text-[#fff]" />
              <span className="text-[#fff] ml-1">Upload Image</span>
              <input
                type="file"
                id="image"
                className="hidden"
                onChange={handleImageUpload}
                required
              />
            </label>
            {image && image.name && <span className="ml-4">{image.name}</span>}
          </div>
          <div className="mt-6 text-center">
            <button
              className="bg-[#171a29] ml-10 rounded-lg text-white font-semibold py-2 px-4 transition duration-300"
              onClick={()=>{uploadImage(),handelCreat()}}
           > 
              Add Course
            </button>
          </div>
        </form>
        </div>
      </div>

    </div>
  );
};

export default AddCorse;
