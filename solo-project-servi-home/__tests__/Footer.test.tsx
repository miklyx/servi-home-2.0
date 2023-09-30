import { render, screen } from '@testing-library/react';

import Footer from '../src/components/Footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
  it('hover of "About Us"', () => {
    render(<Footer />);
    const myElem = screen.getByText('Subscribe');
    console.log(myElem);

    expect(myElem).toBeInTheDocument();
  });
});
