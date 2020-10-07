import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { fetchShow as mockFetchShow } from '../api/fetchShow';

import App from '../App';
import { mockEpisodes } from '../fixtures/episode';



test('updates episodes when button is pressed', async () => {
    mockFetchShow.mockResolvedValueOnce({data:mockEpisodes})

    const { getByRole, queryAllByTestId } = render(<App />);

    expect(queryAllByTestId("episode")).toHaveLength(0);

    const dropdown = getByRole('dropdown', {value: /select a season/i});
    fireEvent.click(dropdown);

    await wait();

    expect(queryAllByTestId('episode')).toHaveLength(3);
})