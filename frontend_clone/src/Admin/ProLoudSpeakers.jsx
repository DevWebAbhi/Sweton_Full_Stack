import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/EventAdmin.css';

const ProLoudSpeakers = () => {
  const [arr, setArr] = useState([1]);
  const [file, setFile] = useState([]);
  const [Data, setData] = useState({
    title: '',
    series: '',
    description: '',
    programPower: '',
    voiceCoil: '',
    response: '',
    senstivity: '',
    nominalDiameter: '',
    nominalImpedance: '',
    nominalPowerHandling: '',
    magnetMaterial: '',
    windingMaterial: '',
    formerMaterial: '',
    windingType: '',
    resonantFrequency: '',
    DCResistance: '',
    electrialQ: '',
    mechnicalQ: '',
    totalQ: '',
    complianceEquivalentVoloume: '',
    peekDiaphamDisplacementVoloume: '',
    effectiveSurfaceAreaOfCone: '',
    referanceEfficiency: '',
    movingMassIncludingAirLoad: '',
    motorStrenghth: '',
    voiceCoilInductance: '',
    effectiveBandwidthProduct: '',
    voiceCoilOverhang: '',
    overAllDiameter: '',
    boltCircleDiameter: '',
    baffleCutOutDiameter: '',
    depth: '',
    flangeAndGasketThikness: '',
    grossWeight: '',
    reconeKitNumber: '',
    noOfImage: 1,
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
      let uploadedFile = e.target.files[0];
      
  
     
    
      tempArr.push(uploadedFile);
     setFile(tempArr);
      console.log(tempArr);
   
  
      
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let i = 0; i < file.length; i++) {
      if(file[i].name=='responseCurve.jpg' || file[i].name=='responseCurve.JPG' || file[i].name=='responseCurve.jpeg' || file[i].name=='responseCurve.JPEG' || file[i].name=='responseCurve.png' || file[i].name=='responseCurve.PNG' ){
        formData.append('responseCurve', file[i]);
        console.log('tfgvaxedgbvws')
      }else{
      formData.append('Images', file[i]);
      console.log(file[i].name);
      }
    }

    for (const key in Data) {
      formData.append(key, Data[key]);
    }
    
    axios
      .post('http://localhost:8080/proloud/post', formData)
      .then((res) => console.log('posted'))
      .catch((rej) => {
        console.log(rej);
      });
  };

  return (
    <div>
      <h1>Add ProLoudSpeaker</h1>
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
          <label htmlFor="">Series</label>
          <input
            type="text"
            name="series"
            onInput={handleFormData}
            placeholder="Series"
          />
         
          <label htmlFor="">Description</label>
          <input
            type="text"
            name="description"
            onInput={handleFormData}
            placeholder="Description"
          />
          <label htmlFor="">Program Power</label>
          <input
            type="text"
            name="programPower"
            placeholder="Program Power"
            onInput={handleFormData}
          />
          <label htmlFor="">Voice Coil</label>
          <input
            type="text"
            name="voiceCoil"
            placeholder="Voice Coil"
            onInput={handleFormData}
          />
          <label htmlFor="">Response</label>
          <input
            type="text"
            name="response"
            onInput={handleFormData}
            placeholder="Response"
          />
          <label htmlFor="">Senstivity</label>
          <input
            type="text"
            name="senstivity"
            onInput={handleFormData}
            placeholder="Senstivity"
          />
          <label htmlFor="">Nominal Diameter</label>
          <input
            type="text"
            name="nominalDiameter"
            onInput={handleFormData}
            placeholder="Nominal Diameter"
          />
          <label htmlFor="">Nominal Impedance</label>
          <input
            type="text"
            name="nominalImpedance"
            onInput={handleFormData}
            placeholder="Nominal Impedance"
          />
          <label htmlFor="">Nominal Power Handling</label>
          <input
            type="text"
            name="nominalPowerHandling"
            onInput={handleFormData}
            placeholder="Nominal Power Handling"
          />
          <label htmlFor="">Magnet Material</label>
          <input
            type="text"
            name="magnetMaterial"
            onInput={handleFormData}
            placeholder="Magnet Material"
          />
          <label htmlFor="">Winding Material</label>
          <input
            type="text"
            name="windingMaterial"
            onInput={handleFormData}
            placeholder="Winding Material"
          />
          <label htmlFor="">Former Material</label>
          <input
            type="text"
            name="formerMaterial"
            onInput={handleFormData}
            placeholder="Former Material"
          />
          <label htmlFor="">Winding Type</label>
          <input
            type="text"
            name="windingType"
            onInput={handleFormData}
            placeholder="Winding Type"
          />
          <label htmlFor="">Resonant Frequency</label>
          <input
            type="text"
            name="resonantFrequency"
            onInput={handleFormData}
            placeholder="Resonant Frequency"
          />
          <label htmlFor="">DC Resistance</label>
          <input
            type="text"
            name="DCResistance"
            onInput={handleFormData}
            placeholder="DC Resistance"
          />
          <label htmlFor="">Electrical Q</label>
          <input
            type="text"
            name="electrialQ"
            onInput={handleFormData}
            placeholder="Electrical Q"
          />
          <label htmlFor="">Mechanical Q</label>
          <input
            type="text"
            name="mechnicalQ"
            onInput={handleFormData}
            placeholder="Mechanical Q"
          />
          <label htmlFor="">Total Q</label>
          <input
            type="text"
            name="totalQ"
            onInput={handleFormData}
            placeholder="Total Q"
          />
          <label htmlFor="">Compliance Equivalent Volume</label>
          <input
            type="text"
            name="complianceEquivalentVoloume"
            onInput={handleFormData}
            placeholder="Compliance Equivalent Volume"
          />
          <label htmlFor="">Peek Diaphragm Displacement Volume</label>
          <input
            type="text"
            name="peekDiaphamDisplacementVoloume"
            onInput={handleFormData}
            placeholder="Peek Diaphragm Displacement Volume"
          />
          <label htmlFor="">Effective Surface Area Of Cone</label>
          <input
            type="text"
            name="effectiveSurfaceAreaOfCone"
            onInput={handleFormData}
            placeholder="Effective Surface Area Of Cone"
          />
          <label htmlFor="">Reference Efficiency</label>
          <input
            type="text"
            name="referanceEfficiency"
            onInput={handleFormData}
            placeholder="Reference Efficiency"
          />
          <label htmlFor="">Moving Mass Including Air Load</label>
          <input
            type="text"
            name="movingMassIncludingAirLoad"
            onInput={handleFormData}
            placeholder="Moving Mass Including Air Load"
          />
          <label htmlFor="">Motor Strength</label>
          <input
            type="text"
            name="motorStrenghth"
            onInput={handleFormData}
            placeholder="Motor Strength"
          />
          <label htmlFor="">Voice Coil Inductance</label>
          <input
            type="text"
            name="voiceCoilInductance"
            onInput={handleFormData}
            placeholder="Voice Coil Inductance"
          />
          <label htmlFor="">Effective Bandwidth Product</label>
          <input
            type="text"
            name="effectiveBandwidthProduct"
            onInput={handleFormData}
            placeholder="Effective Bandwidth Product"
          />
          <label htmlFor="">Voice Coil Overhang</label>
          <input
            type="text"
            name="voiceCoilOverhang"
            onInput={handleFormData}
            placeholder="Voice Coil Overhang"
          />
          <label htmlFor="">Overall Diameter</label>
          <input
            type="text"
            name="overAllDiameter"
            onInput={handleFormData}
            placeholder="Overall Diameter"
          />
          <label htmlFor="">Bolt Circle Diameter</label>
          <input
            type="text"
            name="boltCircleDiameter"
            onInput={handleFormData}
            placeholder="Bolt Circle Diameter"
          />
          <label htmlFor="">Baffle Cut Out Diameter</label>
          <input
            type="text"
            name="baffleCutOutDiameter"
            onInput={handleFormData}
            placeholder="Baffle Cut Out Diameter"
          />
          <label htmlFor="">Depth</label>
          <input
            type="text"
            name="depth"
            onInput={handleFormData}
            placeholder="Depth"
          />
          <label htmlFor="">Flange and Gasket Thickness</label>
          <input
            type="text"
            name="flangeAndGasketThikness"
            onInput={handleFormData}
            placeholder="Flange and Gasket Thickness"
          />
          <label htmlFor="">Gross Weight</label>
          <input
            type="text"
            name="grossWeight"
            onInput={handleFormData}
            placeholder="Gross Weight"
          />
          <label htmlFor="">Recone Kit Number</label>
          <input
            type="text"
            name="reconeKitNumber"
            onInput={handleFormData}
            placeholder="Recone Kit Number"
          />
          <label htmlFor="">No of Images</label>
          <select name="noOfImage" onChange={handleFormData} id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>

         
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
          <label htmlFor="">Response Curve</label>
          <input 
           type="file"
           onChange={handleFiles}
           className="form-control-file1"
           name="monfichier"
          />
          <input type="submit" value="POST" className="btn btn-default" />
        </div>
      </form>
    </div>
  );
};

export default ProLoudSpeakers;