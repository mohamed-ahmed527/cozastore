import { useEffect, useState } from "react"

const FetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if(!res.ok){
          throw Error("can't fetch data from this resource");
        }
        return res.json();
      })
      .then((data)=>{
        setData(data);
      })
      .catch(err => {
        setError(err.message)
      })
  }, [url])
  return {data,error};
}

export default FetchData;