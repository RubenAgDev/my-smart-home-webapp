import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('verify the app renders correctly', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
