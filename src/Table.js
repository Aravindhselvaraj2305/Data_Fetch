import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.css';

const Table = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags');
          setCountries(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1 className='name'>Country Name and Flags</h1>
        <table className='table'>
          <thead>
            <tr >
              <th>Name</th>
              <th>Flags</th>
              <th>Native</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country, index) => (
              <tr key={index}>
                <td>
                  <strong>Name: </strong> {country.name?.common}
                  <br />
                  <strong>Official Name: </strong>{country.name?.official}
                </td>
                <td>
                  <img
                    src={country.flags?.png}
                    alt={country.flags?.alt}
                    style={{ maxWidth: '30px', maxHeight: '20px' }}
                  />
                </td>
                <td>
                  <strong>Native Name: </strong>{country.name?.nativeName[Object.keys(country.name.nativeName)[0]]?.common}
                  <br />
                  <strong>Native Official Name: </strong>{country.name?.nativeName[Object.keys(country.name.nativeName)[0]]?.official}
                </td>
              </tr> 
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default Table;
