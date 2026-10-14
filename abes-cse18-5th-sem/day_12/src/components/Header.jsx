
import React from 'react';
import {useNavigate} from "react-router-dom";

const Header = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#061B33',
      color: '#FFFFFF',
      padding: '10px 25px'
    }}>

      <h2 style={{ color: '#94e7f5' }}>
        My App
      </h2>

      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="/" style={{
          color: '#FFFFFF',
          textDecoration: 'none'
        }}>Home</a>

        <a href="/about" style={{
          color: '#A58BFA',
          textDecoration: 'none'
        }}>About</a>

        <a href="/products" style={{
          color: '#FB9A1E',
          textDecoration: 'none'
        }}>Products</a>

        <a href="/cart" style={{
          color: '#20B685',
          textDecoration: 'none'
        }}>Cart</a>

        <a href="/contact" style={{
          color: '#FF5740',
          textDecoration: 'none'
        }}>Contact</a>
      </div>

      <button style={{
        backgroundColor: '#E6FB3F',
        color: '#061B33',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Login
      </button>

    </div>
  );
};

export default Header;
