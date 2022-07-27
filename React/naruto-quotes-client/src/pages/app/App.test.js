import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const response = { speaker: 'Speaker', quote: 'test quote'};

const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
      return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the app with a button, an image and a quote', () => {
  render(<App />);
  
  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');
  const text = screen.getByText(/loading speaker/i)

  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(text).toBeInTheDocument();
});

test('calls api on button click and update its text', async () => {
  render(<App />)
  const customResponse = {
    speaker: 'custom test speaker',
    quote: 'teste quote'
  };

  render(<App />);

  server.use(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
      return res(ctx.json(customResponse));
    })
  );
  

  const buttonEl = screen.getAllByRole('button');

  fireEvent.click(buttonEl[0])

  const quoteEl = await screen.findByText(/custom test speaker/i)

  expect(quoteEl).toBeInTheDocument();
});

test('calls api on startup and renders it response', async () => {
  render(<App />)

  const quoteEl = await screen.findByText(response.quote);

  expect(quoteEl).toBeInTheDocument();
});
