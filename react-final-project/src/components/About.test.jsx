import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './About';

describe('About component', () => {
  it('renders the heading text correctly', () => {
    render(<About />);
    const headingElement = screen.getByRole('heading', { level: 2 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(/BRINGING YOU THE BEST AUDIO GEAR/i);
  });
});
