import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

register();

/* eslint-disable */

function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('serviceWorkerCustom.js')
        .then(registration => {
          console.log('Service Worker is registered.');
          const data = {
            type: 'CACHE_URLS',
            payload: [
              location.href,
              ...performance.getEntriesByType('resource').map((r) => r.name)
            ]
          };
          if (registration.installing) {
            registration.installing.postMessage(data);
          };
        })
        .catch(err => {
          console.error('Registration of service worker failed:', err);
        });
    });
  }
}
