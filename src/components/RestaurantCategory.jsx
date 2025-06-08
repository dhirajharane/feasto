import React from 'react';
import { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data , showItems, setShowIndex, index}) => {

  const handleClick=()=>{
      setShowIndex(showItems ? null : index); 
  };


  return (
    
    <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-5">
      <div className="flex justify-between items-center  pb-3 mb-4 cursor-pointer" onClick={handleClick}>
        <h2 className="sm:font-semibold sm:text-xl font-medium text-sm  text-gray-800 flex items-center gap-2">
          {data.title}
          <span className=" font-light text-black-500  ">({data.itemCards.length})</span>
        </h2>
        <span className=" text-xl cursor-pointer transition-transform duration-300">⬇️</span>
      </div>

      {showItems && <ItemList items={data.itemCards} />}
    </div>
    
  );
};

export default RestaurantCategory;
