import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Categorie = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/categories-list')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    }, [])
    
    return (
        <div className='mt-10'>
             <h1>All Categorie</h1>
                    {
                        categories.map(categorie=><p key={categorie.id}>
                            <Link to={`/categorie/${categorie.id}`}>{categorie.courses_name}</Link>
                        </p>)
                    }
        </div>
    );
};

export default Categorie;