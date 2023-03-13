import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
  );
  const linkElement = screen.getByText(/Rick And Morty API/i);
  expect(linkElement).toBeInTheDocument();
});
