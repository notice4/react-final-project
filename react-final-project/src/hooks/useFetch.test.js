import { renderHook, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import useFetch from './useFetch'

global.fetch = vi.fn()

describe('useFetch Hook', () => {
  it('should initially return loading state', () => {
    fetch.mockImplementation(() => new Promise(() => {}))

    const { result } = renderHook(() => useFetch('http://fakeurl'))

    expect(result.current.loading).toBe(true)
    expect(result.current.data).toEqual([])
    expect(result.current.error).toBe(null)
  })

  it('should successfully fetch data', async () => {
    const mockData = [{ id: 1, name: 'Product' }]
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    })

    const { result } = renderHook(() => useFetch('http://fakeurl'))

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toEqual(mockData)
    expect(result.current.error).toBe(null)
  })
})
