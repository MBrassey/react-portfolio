import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import PageContent from '../../PageContent';

afterEach(cleanup);

describe('Page component', () => {
  it('renders', () => {
    render(<PageContent />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<PageContent />);

    expect(asFragment()).toMatchSnapshot();
  });
})
