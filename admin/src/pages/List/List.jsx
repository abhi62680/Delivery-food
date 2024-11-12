import React, { useEffect, useState } from 'react';
import './List.css';
import axios from "axios";
import { toast } from 'react-toastify';

const List = () => {
  const url = 'http://localhost:4000';
  const [list, setList] = useState([]);

  // Fetch list of items from the server
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/List`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error('Error fetching list');
      }
    } catch (error) {
      toast.error('Failed to fetch data');
    }
  };

  // Remove food item from the list
  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        setList(list.filter(item => item._id !== foodId));
        toast.success('Food item removed successfully');
      } else {
        toast.error('Error removing food item');
      }
    } catch (error) {
      toast.error('Failed to remove food item');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className="list-table-format">
            <img src={`${url}/images/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p onClick={() => removeFood(item._id)} className='cursor'>x</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
