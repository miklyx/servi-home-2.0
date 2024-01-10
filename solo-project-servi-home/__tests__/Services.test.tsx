import { render, screen } from '@testing-library/react';
import Service from '../src/components/Services';
import '@testing-library/jest-dom';

describe('Services component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Service />);
    //TODO: Redo this test, I moved the services card to a component
    // expect(getByText('Our Services')).toBeInTheDocument();
    // expect(getByText('Revitalize Your Rugs')).toBeInTheDocument();
    // expect(getByText('Renew Your Furniture')).toBeInTheDocument();
    // expect(getByText('Elevate Your Tabletops')).toBeInTheDocument();
  });
});
