import { createSocialNetworksButtons } from "./socialNetworks";

const createHeader=()=>{
    const header=document.createElement("header")
    const headerTop=createHeaderTop();
    const headerCenter=createHeaderCenter();
    header.append(headerTop,headerCenter);
    
    header.classList.add("red");

    document.getElementById("content").appendChild(header);



    };

    const createHeaderTop=()=>{
    const headerTop=document.createElement("div");
    const left=document.createElement("div");
    const right=document.createElement("div");

    const ouverture=document.createElement("div");
    const ouvertureText="Ouvert du mercredi au dimanche | 11h45-14h le midi, 19h-21h le soir. Ouvert le dimanche soir uniquement pour les groupes sur réservation."
    ouverture.append(ouvertureText);
    
    const tel=document.createElement("div");
    const telText="09 72 86 78 06";
    tel.append(telText);
    
    left.append(ouverture,tel);
    
    const ulSocialNetworks=createSocialNetworksButtons();

    
    ulSocialNetworks.append(facebook,googleMap,instagram);
    right.append(ulSocialNetworks);
    

    headerTop.append(left,right);

    return headerTop;
    };
    
    const createHeaderCenter=()=>{
        //TODO : make it sticky
        const headerCenter=document.createElement("div");
        const left=document.createElement("img");
        left.src="refuge.png";

        const right=document.createElement("nav");
        const accueil=document.createElement("a");
        accueil.textContent="ACCEUIL";
        const menu=document.createElement("a");
        menu.textContent="MENU";
        const reservation=document.createElement("a");
        reservation.textContent="RESERVATION";
        const galerie=document.createElement("a");
        galerie.textContent="GALERIE";

        right.append(accueil,menu,reservation,galerie);

        headerCenter.append(left,right);
        console.log("wtf?")
        return headerCenter;
    };
    export{createHeader};