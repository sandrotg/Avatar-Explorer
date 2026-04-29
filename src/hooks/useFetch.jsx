import { useEffect, useState } from "react";

export function useFetch(url){
    const [datos, setDatos] = useState(null);
    const [estado, setEstado] = useState({cargando: true, error: false});

    useEffect(() => {
        async function cargar() {
            try {
                const res = await fetch(url);
                if(!res.ok) throw new Error("Error en el fetch");
                const json = await res.json();
                setDatos(json.docs || json); //en caso de que la API devuelva un objeto con una propiedad "docs (esté paginada)"
                setEstado({cargando: false, error: false});
            }catch(err){
                setEstado({cargando: false, error: true});
            }
        }
        cargar();
    }, [url]);

    return {datos, ...estado};
}