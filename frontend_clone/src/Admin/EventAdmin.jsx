import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/EventAdmin.css';

const EventAdmin = () => {
  const [arr, setArr] = useState([1]);
  const [file, setFile] = useState([]);
  const [Data, setData] = useState({
    title: '',
    year: '',
    noOfImage: 1,
    about: '',
  });

  function handleFormData(event) {
    let val = event.target.value;
    setData({ ...Data, [event.target.name]: val });

    if (event.target.name === 'noOfImage') {
      let ar = new Array(Number(val)).fill(1);
      setArr(ar);
    }
  }

  async function handleFiles(e) {
    try {
      let tempArr = [...file];
      tempArr.push(e.target.files[0]);
      await setFile(tempArr);
      console.log(tempArr);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let i = 0; i < file.length; i++) {
      formData.append('Images', file[i]);
    }

    for (const key in Data) {
      formData.append(key, Data[key]);
    }

    axios
      .post('http://localhost:8080/events/post', formData)
      .then((res) => console.log('posted'))
      .catch((rej) => {
        console.log(rej);
      });
  };

  return (
    <div>
        <h1>Add Events</h1>
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
          
          <label htmlFor="">Year</label>
          <input
            type="text"
            name="year"
            onInput={handleFormData}
            placeholder="year"
          />
          <label htmlFor="">No of Images</label>
          <select name="noOfImage" onChange={handleFormData} id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <label htmlFor="">About</label>
          <textarea
            onInput={handleFormData}
            name="about"
            type="textarea"
            rows="4"
            cols="50"
          />
          {arr.map((e, idx) => (
            <label key={idx}>
              Upload Image
              <br />
              <input
                type="file"
                onChange={handleFiles}
                className="form-control-file"
                name="monfichier"
                multiple // Allow multiple files to be selected
              />
            </label>
          ))}
          <input type="submit" value="POST" className="btn btn-default" />
        </div>
      </form>
    </div>
  );
};

export default EventAdmin;