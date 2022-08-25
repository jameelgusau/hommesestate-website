import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { Link } from "react-router-dom";

const SearchComponent = () => {
  const [ selectProperty, setSelectProperty] = useState('');
  const [ selectLocation, setSelectLocation] = useState('');
  const handleChangePropertyType= (event)=>{
    setSelectProperty( event.target.value)
  }
  const handleChangeLocation= (event)=>{
    setSelectLocation( event.target.value)
  }

  return (
    <div className="search">
      <div class="radio-container">
        <input
          label="Buy"
          type="radio"
          id="buy"
          name="group"
          value="buy"
          checked
        />
        <span className="vr"></span>
        <input
          label="Rent"
          type="radio"
          id="rent"
          name="group"
          value="rent"
        />
      </div>
      <div className="select-container">
        <div className="select-colums">

          <div className="select-container__column">
            <label for="propertyType" className="select-label"><AiOutlineUnorderedList color="#C1C1C1" size={"20px"}/> Property Type</label>
            <select name="propertyType" defaultValue={1} id="propertyType" className="select" onChange={handleChangePropertyType} value={selectProperty}>
              <option value="1"  className="option">Commercial</option>
              <option value="2">
                Residential
              </option>
              {/* <option value="third">Third Value</option> */}
            </select>
          </div>
          <div className="select-container__column">
            <label for="location" className="select-label"> <HiOutlineLocationMarker  color="#C1C1C1" size={"20px"}/>Location</label>
            <select name="location" id="location" defaultValue={1} className="select" onChange={handleChangeLocation} value={selectLocation}>
              <option value="1" className="option">Wuse Zone 4</option>
              <option value="2">
                Wuye
              </option>
              <option value="3">Kagini</option>
            </select>
          </div>
          {/* <div className="select-container__column">
            <label for="pet-select" className="select-label"><span style={{color: "#C1C1C1", fontSize:"20px"}}>&#8358;</span> Price Range</label>
            <select name="choice" id="pet-select" className="select">
              <option value="first" selected className="option"> First Value</option>
              <option value="second">
                Second Value
              </option>
              <option value="third">Third Value</option>
            </select>
          </div> */}
        </div>
        <div className="select-container__button">
          <Link to="/property/1"  type="button" className="search-btn">
            <BiSearch />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
