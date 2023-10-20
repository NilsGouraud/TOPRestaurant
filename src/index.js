const { createHeaderAccueil,createHeaderMenu,createHeaderReservation,createHeaderGalerie } = require("./header");
const { createFooter } = require("./footer");
const { createBodyAccueil,createBodyMenu,createBodyReservation,createBodyGalerie }=require("./body")

const addListeners=()=>{
    const retourAccueil=document.getElementById("retourAccueil");
    if (retourAccueil!=null){
        retourAccueil.onclick=()=>{
            window.scrollTo(0,0);
            createAccueil();
        }
    }
    const continuerExplorer=document.getElementById("continuerExplorer");
    if (continuerExplorer!=null){
        continuerExplorer.onclick=()=>{
            window.scrollTo(0,0);
            createAccueil();
        }
    }
    const notreCarte=document.getElementById("notreCarte");
    if (notreCarte!=null){
        notreCarte.onclick=()=>{
            createMenu();
        }
    }
    document.getElementById("accueil").onclick=()=>{
        window.scrollTo(0,0);
        createAccueil();
    }
    document.getElementById("menu").onclick=()=>{
        window.scrollTo(0,0);
        createMenu();
    }
    document.getElementById("reservation").onclick=()=>{
        window.scrollTo(0,0);
        createReservation();
    }
    document.getElementById("galerie").onclick=()=>{
        window.scrollTo(0,0);
        createGalerie();
    }
}



const footer=createFooter();

const createAccueil=()=>{
    const formerActive=document.getElementsByClassName("active");
    if(formerActive.length>0){
        formerActive[0].classList.remove("active");
    }
    const header=createHeaderAccueil();
    const body=createBodyAccueil();
    const content=document.getElementById("content");
    content.innerHTML="";
    content.append(header,body,footer);
    const activeTab=document.getElementById("accueil");
    activeTab.classList.add("active");
    addListeners();
}
const createMenu=()=>{
    const formerActive=document.getElementsByClassName("active");
    if(formerActive.length>0){
        formerActive[0].classList.remove("active");
    }
    const header=createHeaderMenu();
    const body=createBodyMenu();
    const content=document.getElementById("content");
    content.innerHTML="";
    content.append(header,body,footer);
    const activeTab=document.getElementById("menu");
    activeTab.classList.add("active");
    addListeners();
}
const createReservation=()=>{
    const formerActive=document.getElementsByClassName("active");
    if(formerActive.length>0){
        formerActive[0].classList.remove("active");
    }
    const header=createHeaderReservation();
    const body=createBodyReservation();
    const content=document.getElementById("content");
    content.innerHTML="";
    content.append(header,body,footer);
    const activeTab=document.getElementById("reservation");
    activeTab.classList.add("active");
    addListeners();
}
const createGalerie=()=>{
    const formerActive=document.getElementsByClassName("active");
    if(formerActive.length>0){
        formerActive[0].classList.remove("active");
    }
    const header=createHeaderGalerie();
    const body=createBodyGalerie();
    const content=document.getElementById("content");
    content.innerHTML="";
    content.append(header,body,footer);
    const activeTab=document.getElementById("galerie");
    activeTab.classList.add("active");
    addListeners();
}




createAccueil();

