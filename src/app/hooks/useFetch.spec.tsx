/**
 * @jest-environment jsdom
 */

import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from './useFetch';

global.fetch = jest.fn();

describe('useFetch', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should set loading to true initially', () => {
        const { result } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10'));
        expect(result.current.loading).toBe(true);
        expect(result.current.data).toBeNull();
        expect(result.current.errors).toBeNull();
    });

    it('should fetch data successfully', async () => {
        const mockData = { message: 'success' };
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockData),
        });

        const { result } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10'));

        await waitFor(() => expect(result.current.loading).toBe(false));

        expect(result.current.data).toEqual(mockData);
        expect(result.current.errors).toBeNull();
    });

    it('should handle fetch error', async () => {
        const errorMessage = 'Fetch failed with status: 404';
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 404,
            json: jest.fn().mockResolvedValueOnce({}),
        });

        const { result } = renderHook(() => useFetch('https://jsolacehlder.typicode.com/posts?_limit=10'));

        await console.log(result.current.data);

        await waitFor(() => expect(result.current.loading).toBe(false));

        expect(result.current.data).toBeNull();
        expect(result.current.errors).toBeInstanceOf(Error);
        expect(result.current.errors?.message).toBe(errorMessage);
    });
});
