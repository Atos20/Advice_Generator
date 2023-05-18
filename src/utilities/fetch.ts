// fetch.js
import { ref, Ref } from 'vue'

export interface FetchResult<T> {
  data: Ref<T | null>
  error: Ref<Error | null>
}

export async function useFetch<T>(url: string): Promise<FetchResult<T>> {
  const data: Ref<T | null> = ref(null)
  const error: Ref<Error | null> = ref(null)

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    const json: T = await response.json()
    data.value = json
  } catch (err: unknown) {
    error.value = err instanceof Error ? err : new Error(String(err))
  }

  return { data, error }
}
