import{useState}from 'react'
export default function useRefresh(defaultValue){
  const [refreshKey, setRefreshKey] = useState(defaultValue);
  const setRefresh = () => {
    setRefreshKey(oldKey => oldKey + 1);
  }
  return[
    refreshKey,
    setRefresh
  ]
}