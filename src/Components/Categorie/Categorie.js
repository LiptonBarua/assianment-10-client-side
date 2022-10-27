import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Categorie.css'

const Categorie = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/categories-list')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    }, [])
    
    return (
        <div className='my-10 bg-primary p-5 md:fixed rounded-5'>
             <h1 className='py-2 bg-danger text-white px-3 text-center'>All Categorie</h1>
            <div className='text-decoration-none categorie '>
                    {
                        categories.map(categorie=><p key={categorie.id}>
                            <Link to={`/categorie/${categorie.id}`}>{categorie.courses_name}</Link>
                        </p>)
                    }
            </div>
        </div>
    );
};

export default Categorie;