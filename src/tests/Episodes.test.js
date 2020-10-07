import React from 'react';
import { render } from '@testing-library/react';
import Episodes from '../components/Episodes';

import { mockEpisodes } from '../fixtures/episode';

test('renders episodes', () => {
    render(<Episodes episodes={[]} error='' />);
});

test('component renders with episodes', () => {
    const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} error="" />)

    expect(queryAllByTestId('episode')).toHaveLength(0);
    expect(queryAllByTestId('episode')).toStrictEqual([])

    rerender(<Episodes episodes={mockEpisodes} error='' />)

    expect(queryAllByTestId('episode')).toHaveLength(3)
})