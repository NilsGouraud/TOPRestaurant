const createBodyAccueil=()=>{

}
const createBodyMenu=()=>{
    const conteneurCarte=document.createElement("div");
    conteneurCarte.classList.add("conteneurCarte");
    const carte=document.createElement("div");
    carte.classList.add("carte");
    const aPartager=document.createElement("img");
    aPartager.src="menu/aPartager.png";
    aPartager.alt="";
    const entrees=document.createElement("img");
    entrees.src="menu/entrees.png";
    entrees.alt="";
    const specialites=document.createElement("img");
    specialites.src="menu/entrees.png";
    specialites.alt="";
    const plats=document.createElement("img");
    plats.src="menu/plats.png";
    plats.alt="";
    const desserts=document.createElement("img");
    desserts.src="menu/desserts.png";
    desserts.alt="";
    const boissons=document.createElement("img");
    boissons.src="menu/boissons.png";
    boissons.alt="";
    const vins=document.createElement("img");
    vins.src="menu/vins.png";
    vins.alt="";
    carte.append(aPartager,entrees,specialites,plats,desserts,boissons,vins);
    conteneurCarte.append(carte)
    return conteneurCarte;
}
const createBodyReservation=()=>{

}
const createBodyGalerie=()=>{

}



export{ createBodyAccueil,createBodyMenu,createBodyReservation,createBodyGalerie }