// src/MainPage.jsx
import React, { useState, useEffect } from 'react';

function MainPage() {
  const [htmlContent, setHtmlContent] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    // Fetch the Flask-rendered snippet (which includes the Plotly graph and asset list)
    fetch('/')
      .then(response => response.text())
      .then(text => {
         // Optionally, you could extract only a part of the response.
         // Here we assume the entire HTML is what you want to inject.
         setHtmlContent(text);
      })
      .catch(error => console.error('Error loading HTML snippet:', error));

    // Fetch an additional value from Flask
    fetch('/value')
      .then(response => response.json())
      .then(data => setValue(data.value))
      .catch(error => console.error('Error loading value:', error));
  }, []);

  return (
    <div className="main-page-container">
      {/* Inject the loaded HTML snippet */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      {/* Display the additional value */}
      <div className="main-page-value" style={{ marginTop: '2rem', fontWeight: 'bold' }}>
        Value: {value}
      </div>
    </div>
  );
}

export default MainPage;
