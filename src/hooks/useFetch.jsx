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
    if(firstData.docs){
        let hasMorePages = true;
        let page = 2;
        all = firstData.docs; //en caso de que la API devuelva un objeto con una propiedad "docs (esté paginada)"
        while(hasMorePages){
            console.log(`Cargando página ${page}...`);
            const data = await fetchToJson(`${url}&page=${page}`);
            if(!data || data.length === 0){
                hasMorePages = false;
            }else{
                all = [...all, ...data.docs];
                page++;
            }
        }
        return all;
    }
    return firstData;
}

async function fetchToJson(url){
    const res = await fetch(url);
    if(!res.ok) throw new Error("Error en el fetch");
    const json = await res.json();
    return json;
}