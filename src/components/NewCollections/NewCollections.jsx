
import React from 'react';
import './NewCollections.css';
import Item from '../Item/Item';
import d1 from '../Assets/d1.jpeg';
import d2 from '../Assets/d2.jpeg';
import d3 from '../Assets/d3.jpeg';
import d41 from '../Assets/d41.jpeg';

import m5 from '../Assets/m5.jpeg';
import m6 from '../Assets/m6.jpeg';
import m7 from '../Assets/m7.jpeg';
import m8 from '../Assets/m8.jpeg';

const collections = [
  { id: 13, name: 'Collection 1', image: d1, new_price: '$50', old_price: '$60' },
  { id: 14, name: 'Collection 2', image: d2, new_price: '$45', old_price: '$55' },
  { id: 15, name: 'Collection 3', image: d3, new_price: '$40', old_price: '$50' },
  { id: 16, name: 'Collection 4', image: d41, new_price: '$35', old_price: '$45' },
  { id: 5, name: 'Collection 5', image: m5, new_price: '$30', old_price: '$40' },
  { id: 6, name: 'Collection 6', image: m6, new_price: '$25', old_price: '$35' },
  { id: 7, name: 'Collection 7', image: m7, new_price: '$20', old_price: '$30' },
  { id: 8, name: 'Collection 8', image: m8, new_price: '$25', old_price: '$35' },
];

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='collections'>
            {collections.map((item, i) => (
                <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            ))}
        </div>
    </div>
  );
};

export default NewCollections;
