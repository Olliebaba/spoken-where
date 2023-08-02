import { render, screen } from '@testing-library/react';

import type { CountryItem } from '@/pages';
import Index from '@/pages/index';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Index page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      const countries: CountryItem[] = [
        {
          code: 'US',
          emoji: '🇺🇸',
          name: 'United States',
          __typename: 'Country',
        },
      ];
      render(<Index countries={countries} />);

      const heading = screen.getByRole('heading', {
        name: /Boilerplate code/,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
