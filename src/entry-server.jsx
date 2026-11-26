import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Used only at build time: renders the page to plain HTML so search engines
// (and visitors on slow connections) see all the content before JavaScript loads.
export function render() {
  return renderToString(<App />);
}
