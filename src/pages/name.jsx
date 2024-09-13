import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NameContext } from '../NameContext';
import '../Styles/Name.css';

const Name = () => {
  const { name, setName } = useContext(NameContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className='name'>
      <div className='question-1'>
        What is your name?
      </div>
      <form onSubmit={handleSubmit} className="search-form">
        <input 
          type="search" 
          placeholder="Name..." 
          value={name} 
          onChange={handleChange} 
          autoFocus 
          required 
        />
      </form>
    </div>
  );
}

export default Name;
