import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [Data,setData] = useState(null);     
    const [isPending,setisPending] = useState(true);
    const [error, seterror] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch data for that resource');
            }
            return res.json();
        })    
        .then(data => {
            setData(data);
            setisPending(false);
            seterror(null);
        })
        .catch(err =>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }
            else{
                seterror(err.message);
                setisPending(false);
             }            
        })

        return () => abortCont.abort();
    }, [url]);

    return { Data, isPending, error }

}


export default useFetch;