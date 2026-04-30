const KEY = "favorites";

export function getFavorites(){
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function toggleFavorite(character){
    const favs = getFavorites();

    const exists = favs.find((fav)=> fav._id === character._id);

    let updatedFavs;

    if(exists){
        updatedFavs = favs.filter((fav)=> fav._id !== character._id);
    }else{
        updatedFavs = [...favs, character];
    }

    localStorage.setItem(KEY, JSON.stringify(updatedFavs));
    return updatedFavs;
}

export function isFavorite(characterId){
    const favs = getFavorites();
    return favs.some((fav) => fav._id === characterId);
}