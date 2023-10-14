const createHeader=()=>{
    const header=document.createElement("header");
    const headerLeft=document.createElement("div");
    const headerRight=document.createElement("div");
    
    const ouverture=document.createElement("div");
    const ouvertureText="Ouvert du mercredi au dimanche | 11h45-14h le midi, 19h-21h le soir. Ouvert le dimanche soir uniquement pour les groupes sur réservation."
    ouverture.append(ouvertureText);
    
    const tel=document.createElement("div");
    const telText="09 72 86 78 06";
    tel.append(telText);
    
    headerLeft.append(ouverture,tel);
    
    const ulSocialNetworks=document.createElement("ul");
    const facebook=document.createElement("div");
    const facebookText="facebook";
    facebook.append(facebookText)
    const googleMap=document.createElement("div")
    const googleMapText="google map";
    googleMap.append(googleMapText)
    const instagram=document.createElement("div")
    const instagramText="instagram";
    instagram.append(instagramText);
    
    ulSocialNetworks.append(facebook,googleMap,instagram);
    
    headerRight.append(ulSocialNetworks);
    
    
    header.append(headerLeft,headerRight);
    document.body.appendChild(header);
    };
    
    export{createHeader};