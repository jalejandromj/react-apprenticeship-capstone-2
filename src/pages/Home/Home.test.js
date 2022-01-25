import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
//import { renderHook } from '@testing-library/react-hooks'

import axios from 'axios';

import GeneralContextProvider from '../../state/GeneralContext';
//import { useGeneralContext } from '../../state/GeneralContext';
import Home from './Home.page.jsx';
import mockResponse from '../../utils/mockApodApiResponse';

const RenderHtml = () => {
  return(
    <GeneralContextProvider>
      <Home></Home>
    </GeneralContextProvider>
  );
};

/*const url = 'https://api.nasa.gov/planetary/apod';
const params = {
  date: '2020-01-01'
};
jest.mock("axios", () => ({
  get: jest.fn((url, params) => { 
    return new Promise((resolve) => {
      url = url
      params = params
      resolve(false)
    })
  })
}));
const mockApodApiResponse = mockResponse;*/

it('renders Home without crashing', () => {
  render(
    <RenderHtml/>
  );
});

it('doest NOT render date input at first', async () => {
  /*await act( async () => render(<RenderHtml/>));
  console.log(mockApodApiResponse);
  act(() => {
    axios.get.mockImplementationOnce(() => Promise.resolve(response));
  });*/

  /*expect(axios.get).toHaveBeenCalledTimes(2);*/
  /*const inputDate = screen.queryByText(/Submit/i);
  await expect(inputDate).toBe(null);*/
});