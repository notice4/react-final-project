import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Categories from './Categories';

describe('Categories component', () => {
  it('renders 3 category cards', () => {
    render(<Categories />);
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings).toHaveLength(3);
    
    expect(screen.getByText('Headphones')).toBeInTheDocument();
    expect(screen.getByText('Speakers')).toBeInTheDocument();
    expect(screen.getByText('Earphones')).toBeInTheDocument();
  });
});
