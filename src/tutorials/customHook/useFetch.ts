import Axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

interface IUseFetch<Type> {
  loading: boolean
  data: Type
}

export const useFetch = <T>(URL: string): IUseFetch<T> => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<T>({} as T)

  const fetchData = useCallback(async () => {
    const response = await Axios.get<T>(URL)
    setData(response.data)
    setLoading(false)
  }, [URL])

  useEffect(() => {
    fetchData()
    return () => {
      return
    }
  }, [fetchData])

  return { loading, data }
}
