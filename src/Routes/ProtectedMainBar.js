import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedMainBar(props) {
    const token=localStorage.getItem('token');
    if(token){
        return props.children;
    }
    return<Navigate to='/'/>
  
}
