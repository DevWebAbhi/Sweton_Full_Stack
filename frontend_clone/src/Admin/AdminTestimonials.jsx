import React from 'react'
import  { useState } from 'react';
import axios from 'axios';
import '../Styles/EventAdmin.css';
const AdminTestimonials = () => {


  const [arr, setArr] = useState([1]);
  const [file, setFile] = useState([]);
  const[isWebsite,isSetWebsite]=useState(false);
  const [Data, setData] = useState({
    title: '',
    description: '',
    type: 'comment',
    website: '',
    rating:1
  });

  function handleFormData(event) {
    let val = event.target.value;
    setData({ ...Data, [event.target.name]: val });

    
  }

  async function handleFiles(e) {
    try {
     setFile(e.target.files);
     console.log(e.target.files)
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

   
      formData.append('Images', file[0]);
    

    for (const key in Data) {
      formData.append(key, Data[key]);
    }

    axios
      .post('http://localhost:8080/testimonials/post', formData)
      .then((res) => console.log('posted'))
      .catch((rej) => {
        console.log(rej);
      });
  };


  function handleVisibleWebsite(e){
    
    if(e.target.value=='website'){
      isSetWebsite(true);
    }else{
      isSetWebsite(false);
    }
  }

  return (
    <div>
    <h1>Add Testimonials</h1>
  <form
    action="/stats"
    encType="multipart/form-data"
    method="post"
    onSubmit={handleSubmit}
    className='admin-form'
  >
    <div className="form-group">
      <label htmlFor="">Title</label>
      <input
        type="text"
        name="title"
        onInput={handleFormData}
        placeholder="Title"
      />

      
    
     

      <label htmlFor="">Description</label>
      <textarea
        onInput={handleFormData}
        name="description"
        type="textarea"
        rows="4"
        cols="50"
      />
      <label htmlFor="">Type</label>
      <select name="type" id="" onChange={(e) => { handleFormData(e); handleVisibleWebsite(e); }}>
        <option value="comment">comment</option>
        <option value="website">website</option>
      </select>
      
      {
        isWebsite ?<>
        
          <label htmlFor="">website</label>
        <input
        type="text"
        name="website"
        onInput={handleFormData}
        placeholder="website"
      />

        </>:""
      }
      <label >
          Upload Image
          <br />
          <input
            type="file"
            onChange={handleFiles}
            className="form-control-file"
            name="monfichier"
           
          />
        </label>
        <select name="rating" id="" onChange={handleFormData}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      <input type="submit" value="POST" className="btn btn-default" />
    </div>
  </form>
</div>
  )
}

export default AdminTestimonials
