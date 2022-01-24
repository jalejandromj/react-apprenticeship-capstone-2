import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import VideoCard from './VideoCard.component.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoCard />, div);
});

it('renders VideoCard correctly', () => {
  const { getByTestId } = render(
    <VideoCard
      name="test name"
      description="test description"
      channel="test channel"
    />
  );
  expect(getByTestId('videoCard')).toHaveTextContent('test name');
  expect(getByTestId('videoCard')).toHaveTextContent('test description');
  expect(getByTestId('videoCard')).toHaveTextContent('test channel');
  expect(getByTestId('videoCard')).toContainHTML('<img alt=""/>');
});
