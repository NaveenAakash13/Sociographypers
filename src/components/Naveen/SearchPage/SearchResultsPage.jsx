import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../common/axiosInstance'; // Adjust import path as necessary
import DribbbleShot from '../../common/DribbbleShot'; // Adjust import path as necessary

const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('http://localhost:8080/pictures/search', {
          params: { keyword: query } // Ensure parameter name matches the backend
        });
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setError('Failed to fetch search results. Please try again.');
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Results</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}
      >
        {results.length > 0 ? (
          results.map((picture) => (
            <div key={picture.id} style={{ width: '100%' }}>
              <DribbbleShot
                image={`data:image/jpeg;base64,${picture.picture}`} // Ensure correct field name for image data
                description={picture.description} // Ensure correct field name for description
                location={picture.location} // Ensure correct field name for location
                date={picture.date} // Ensure correct field name for date
                likes={picture.likes} // Ensure correct field name for likes
                author={picture.author} // Ensure correct field name for author
                avatar={picture.avatar} // Ensure correct field name for avatar
                category={picture.category} // Ensure correct field name for category
                initialComments={picture.initialComments} // Ensure correct field name for initialComments
              />
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
};

export default SearchResultsPage;
