import { createSocialNetworksButtons } from "./socialNetworks";
import { createBanner } from "./navMenu";
const createHeaderAccueil=()=>{
    const header=document.createElement("header")
    const headerTop=createHeaderTop();
    const headerCenter=createBanner();
    const headerBottom=createHeaderBottomAccueil();
    
    headerTop.classList.add("flex");
    header.append(headerTop,headerCenter,headerBottom);
    
    header.classList.add("backgroundHeaderAccueil","header");
    headerTop.classList.add("headerTop");
    headerCenter.classList.add("black","flex","headerCenter");
    headerBottom.classList.add("headerBottomAccueil");
    
    return header;
};

const createHeaderMenu=()=>{
    const header=document.createElement("header")
    const headerTop=createHeaderTop();
    const headerCenter=createBanner();
    const headerBottom=createHeaderBottomMenu();
    
    headerTop.classList.add("flex");
    header.append(headerTop,headerCenter,headerBottom);
    
    header.classList.add("backgroundHeaderAutres","header");
    headerTop.classList.add("headerTop");
    headerCenter.classList.add("black","flex","headerCenter");
    headerBottom.classList.add("headerBottomAutres");
    
    return header;
};
const createHeaderReservation=()=>{
    const header=document.createElement("header")
    const headerTop=createHeaderTop();
    const headerCenter=createBanner();
    const headerBottom=createHeaderBottomReservation();
    
    headerTop.classList.add("flex");
    header.append(headerTop,headerCenter,headerBottom);
    
    header.classList.add("backgroundHeaderAutres","header");
    headerTop.classList.add("headerTop");
    headerCenter.classList.add("black","flex","headerCenter");
    headerBottom.classList.add("headerBottomAutres");
    
    return header;
};
const createHeaderGalerie=()=>{
    const header=document.createElement("header")
    const headerTop=createHeaderTop();
    const headerCenter=createBanner();
    const headerBottom=createHeaderBottomGalerie();
    
    headerTop.classList.add("flex");
    header.append(headerTop,headerCenter,headerBottom);
    
    header.classList.add("backgroundHeaderAutres","header");
    headerTop.classList.add("headerTop");
    headerCenter.classList.add("black","flex","headerCenter");
    headerBottom.classList.add("headerBottomAutres");
    
    return header;
};

//that part of the page is the same across all tabs
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
    
    
    right.append(ulSocialNetworks);
    
    
    headerTop.append(left,right);
    
    return headerTop;
};




//that part of the page depends on the tabs
const createHeaderBottomAccueil=()=>{
    const headerBottom=document.createElement("div");
    const h1=document.createElement("h1");
    h1.textContent="Bienvenue au refuge";
    const img=document.createElement("img");
    img.src="marmite.png";
    const h2=document.createElement("h2");
    h2.textContent="Restaurant de spécialités savoyardes"
    const p=document.createElement("p");
    p.textContent="Entre Cholet et la Tessoualle"
    const notreCarte=document.createElement("button");
    notreCarte.type="button";
    notreCarte.textContent="Notre carte"
    notreCarte.id="notreCarte";
    headerBottom.append(h1, img, h2, p, notreCarte);
    return headerBottom;
}
const createHeaderBottomMenu=()=>{
    const headerBottom=document.createElement("div");
    const menu=document.createElement("div");
    const h1=document.createElement("h1");
    h1.textContent="MENU";
    const p=document.createElement("p");
    const accueil=document.createElement("a");
    accueil.textContent="Accueil";
    accueil.id="retourAccueil"
    const reste=document.createElement("span");
    reste.textContent=" > MENU";
    p.append(accueil,reste);
    menu.append(h1,p);
    headerBottom.append(menu);
    return headerBottom;
}

const createHeaderBottomReservation=()=>{
    const headerBottom=document.createElement("div");
    const menu=document.createElement("div");
    const h1=document.createElement("h1");
    h1.textContent="RESERVATION";
    const p=document.createElement("p");
    const accueil=document.createElement("a");
    accueil.textContent="Accueil";
    accueil.id="retourAccueil"
    const reste=document.createElement("span");
    reste.textContent=" > RESERVATION";
    p.append(accueil,reste);
    menu.append(h1,p);
    headerBottom.append(menu);
    return headerBottom;
}
const createHeaderBottomGalerie=()=>{
    const headerBottom=document.createElement("div");
    const menu=document.createElement("div");
    const h1=document.createElement("h1");
    h1.textContent="GALERIE";
    const p=document.createElement("p");
    const accueil=document.createElement("a");
    accueil.textContent="Accueil";
    accueil.id="retourAccueil"
    const reste=document.createElement("span");
    reste.textContent=" > GALERIE";
    p.append(accueil,reste);
    menu.append(h1,p);
    headerBottom.append(menu);
    return headerBottom;
}

export{createHeaderAccueil,createHeaderMenu,createHeaderReservation,createHeaderGalerie};