import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import Layout from './Layout.component.jsx';
import AuthProvider from '../../providers/Auth';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthProvider><Layout /></AuthProvider>, div);
});

test("It should render initial basic elements", () => {
    const { getByRole, queryAllByRole, queryByText } = render(
      <AuthProvider><Layout /></AuthProvider>
    );
    const input = getByRole("textbox");
    const buttons = queryAllByRole("button");
    const favourites = queryByText("Favourites");

    expect(input).toContainHTML('placeholder="tampico alien mapaches"');
    expect(buttons).toHaveLength(3);
    expect(favourites).not.toBeInTheDocument();
});