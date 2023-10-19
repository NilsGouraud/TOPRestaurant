const createBanner=()=>{
    //TODO : make it sticky
    const banner=document.createElement("div");
    const left=document.createElement("img");
    left.src="refuge.png";

    const right=document.createElement("nav");

    const accueil=document.createElement("a");
    accueil.setAttribute("id","accueil");
    accueil.textContent="ACCUEIL";

    const menu=document.createElement("a");
    menu.setAttribute("id","menu");
    menu.textContent="MENU";

    const reservation=document.createElement("a");
    reservation.setAttribute("id","reservation");
    reservation.textContent="réservation".toUpperCase();

    const galerie=document.createElement("a");
    galerie.setAttribute("id","galerie");
    galerie.textContent="GALERIE";

    right.append(accueil,menu,reservation,galerie);

    banner.append(left,right);
    banner.id=("banner");
    console.log("wtf?")
    return banner;
};

export{ createBanner };