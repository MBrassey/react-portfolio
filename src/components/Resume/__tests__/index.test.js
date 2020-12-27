import { render, cleanup, getByText, getByAltText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import Resume from '../';

afterEach(cleanup);

describe('Resume component', () => {
  it('renders', () => {
    render(<Resume />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Resume />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Certification Link 1 is available', () => {
    const { getByText } = render(<Resume />);
    const CertificationLink = getByText(/Certified Blockchain Architect/i);
    expect(CertificationLink).toBeInTheDocument();
    expect(CertificationLink).toHaveAttribute("href", "https://www.credential.net/44a73119-b770-4a10-901c-7aa6508d5c65");
  })
})
