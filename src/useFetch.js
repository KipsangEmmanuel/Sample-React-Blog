import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                console.log(res)
                if(!res.ok) {
                    throw Error("could not fetch the data for that resource");
                }
              return res.json()
            })
            .then(data => {
               setData(data);
               setIsPending(false);
               setError(null);//we set the error to null if there is no error
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
        }, 1000)


    }, [url]);

  return { data, isPending, error };
}

export default useFetch;