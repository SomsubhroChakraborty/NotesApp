import React from 'react';
import { Link } from 'react-router-dom';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';

function Navbar() {
  return (
    <nav style={navStyle}>
      <h3 style={h3Style}>
        <NewspaperRoundedIcon style={{ marginRight: '15px', fontSize: '40px' }} />
        MemoMaster
      </h3>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>Notes</Link>
        </li>
        <li style={liStyle}>
          <Link to="/create" style={linkStyle}>Create Notes</Link>
        </li>
      </ul>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#912BBC',
  flexWrap: 'wrap',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
};

const liStyle = {
  marginLeft: '20px',
  fontSize:'20px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize:'20px',
};

const h3Style = {
  color: '#fff',
  fontSize: '35px',
  display: 'flex',
  alignItems: 'center',
};

export default Navbar;
