import { createSocialNetworksButtons } from "./socialNetworks";

const createFooter=()=>{
    const footer=document.createElement("div");
    footer.classList.add("footer")
    footer.append(quiSommesNous(),categories(),archives(),rechercher());
    document.getElementById("content").appendChild(footer);
    
    
    return footer;
    
}

const quiSommesNous=()=>{
    const quiSommesNous=document.createElement("div");
    const h1=document.createElement("h1");
    h1.textContent="Qui Sommes Nous ?";
    const img=document.createElement("img");
    img.src="logoAppetizer.png";
    const p=document.createElement("p");
    p.classList.add("lineHeight");
    const bienvenue=document.createElement("span");
    bienvenue.textContent="Bienvenue au ";
    const refuge=document.createElement("span");
    refuge.textContent="Refuge de Ribou";
    const restaurant=document.createElement("span");
    restaurant.textContent=", restaurant spécialisé dans la cuisine savoyarde. Nous sommes ravis de pouvoir vous accueillir du mercredi au dimanche, midi et soir, pour un moment de partage et de convivialité.";
    refuge.classList.add("italic")
    p.append(bienvenue,refuge,restaurant);
    const ulSocialNetworks=createSocialNetworksButtons();
    
    quiSommesNous.append(h1,img,p,ulSocialNetworks);
    
    return quiSommesNous
}
const categories=()=>{
    const categories=document.createElement("div");
    const h1=document.createElement("h1");
    h1.textContent="Categories";
    const p=document.createElement("li");
    const link=document.createElement("a")
    link.textContent="Actualité"
    p.append(link);

    categories.append(h1,p);
    return categories;
};

const archives=()=>{
    const archives=document.createElement("div");
    const h1=document.createElement("h1");
    h1.textContent="Archives";

    const mai2023=document.createElement("li");
    const linkMai2023=document.createElement("a");
    mai2023.append(linkMai2023);
    linkMai2023.textContent="mai 2023";

    const decembre2022=document.createElement("li");
    const linkDecembre2022=document.createElement("a");
    decembre2022.append(linkDecembre2022);
    linkDecembre2022.textContent="décembre 2022";

    const semptembre2022=document.createElement("li");
    const linkSemptembre2022=document.createElement("a");
    semptembre2022.append(linkSemptembre2022);
    linkSemptembre2022.textContent="septembre 2022";

    const aout2022=document.createElement("li");
    const linkAout2022=document.createElement("a");
    aout2022.append(linkAout2022);
    linkAout2022.textContent="août 2022";
    
    
    archives.append(h1,mai2023,decembre2022,semptembre2022,aout2022);
    
    return archives;
};

const rechercher=()=>{
    const rechercher=document.createElement("div");
    const h1=document.createElement("h1");
    h1.textContent="Rechercher";
    const barreRecherche=document.createElement("input");
    barreRecherche.type="text";
    barreRecherche.placeholder="Rechercher ...";
    
    rechercher.append(h1,barreRecherche)
    
    return rechercher;
};

export{ createFooter };