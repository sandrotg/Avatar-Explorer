import { useEffect, useState } from "react";

export function useFetch(url){
    const [datos, setDatos] = useState([]);
    const [estado, setEstado] = useState({cargando: true, error: false});

    useEffect(() => {
        if(!url) return;
        async function cargar() {
            try {
                const data = await fetchPaginationValidator(url);
                setDatos(data);
                setEstado({cargando: false, error: false});
            }catch(err){
                setEstado({cargando: false, error: true});
            }
        }
        cargar();
    }, [url]);

    return {datos, ...estado};
}

async function fetchPaginationValidator(url){
    const firstData = await fetchToJson(url);
    let hasMorePages = true;
    let all = firstData;
    let page = 2;
    while(hasMorePages){
        console.log(`Fetching page ${page}...`);
        const extraData = await fetchToJson(`${url}&page=${page}`);
        if(!extraData || extraData.length === 0){
            hasMorePages = false;
        }else{
            all = [...all, ...extraData];
            page++;
        }
    }
    return all;
}

async function fetchToJson(url){
    const res = await fetch(url);
    if(!res.ok) throw new Error("Error en el fetch");
    const json = await res.json();
    return json;
}