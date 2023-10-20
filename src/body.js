const createBodyAccueil=()=>{
    const accueil=document.createElement("div");

    const top=document.createElement("div");
    top.classList.add("actualite1");
    const h1=document.createElement("h1");
    h1.textContent="Les actualités du Refuge";
    const img=document.createElement("img");
    img.textContent="Continuer à explorer";
    img.src="marmiteRouge.png";

    

    
    const bottom=document.createElement("div")
    bottom.classList.add("actualite2");

    const actu1=document.createElement("div");
    const haut1=document.createElement("div");
    const date1=document.createElement("div");
    const imgDate1=document.createElement("span");
    imgDate1.textContent="🗓";

    const textDate1=document.createElement("span");
    textDate1.textContent="29mai2023";
    date1.append(imgDate1,textDate1);
    const billet1=document.createElement("div");
    const imgBillet1=document.createElement("span");
    imgBillet1.textContent="🏷";
    const textBillet1=document.createElement("span");
    textBillet1.textContent="Actualité";
    billet1.append(imgBillet1,textBillet1);
    const descriptif1=document.createElement("h2");
    descriptif1.textContent="Le Refuge est ouvert tout l'été !";
    haut1.append(date1,billet1);
    actu1.append(haut1,descriptif1);


    const actu2=document.createElement("div");
    const haut2=document.createElement("div");
    const date2=document.createElement("div");
    const imgDate2=document.createElement("span");
    imgDate2.textContent="🗓";
    const textDate2=document.createElement("span");
    textDate2.textContent="11dec2022";
    date2.append(imgDate2,textDate2);
    const billet2=document.createElement("div");
    const imgBillet2=document.createElement("span");
    imgBillet2.textContent="🏷";
    const textBillet2=document.createElement("span");
    textBillet2.textContent="Actualité";
    billet2.append(imgBillet2,textBillet2);
    const descriptif2=document.createElement("h2");
    descriptif2.textContent="❄L’hiver est arrivé au Refuge❄";
    haut2.append(date2,billet2);
    actu2.append(haut2,descriptif2);

    
    const actu3=document.createElement("div");
    const haut3=document.createElement("div");
    const date3=document.createElement("div");
    const imgDate3=document.createElement("span");
    imgDate3.textContent="🗓";
    const textDate3=document.createElement("span");
    textDate3.textContent="27sep2022";
    date3.append(imgDate3,textDate3);
    const billet3=document.createElement("div");
const imgBillet3=document.createElement("span");
imgBillet3.textContent="🏷";
const textBillet3=document.createElement("span");
textBillet3.textContent="Actualité";
billet3.append(imgBillet3,textBillet3);
const descriptif3=document.createElement("h2");
descriptif3.textContent="Reservation en ligne";
haut3.append(date3,billet3);
actu3.append(haut3,descriptif3);


    top.append(h1,img);
    bottom.append(actu1,actu2,actu3);
    accueil.append(top,bottom);
    return accueil;
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
const reservation=document.createElement("div");
    reservation.classList.add("reservation");
    const button=document.createElement("button");
    button.textContent="Continuer à explorer";
    button.id="continuerExplorer";
    const br=document.createElement("br");
    reservation.textContent="Je ne veux pas vous faire de peine, mais vous êtes au mauvais endroit."
    reservation.append(br,button);
    return reservation;
}
const createBodyGalerie=()=>{
const conteneurGalerie=document.createElement("div");
    conteneurGalerie.classList.add("conteneurGalerie");
    const galerie=document.createElement("div");
    galerie.classList.add("galerie");


    const galerie1=document.createElement("div");
    const textGalerie1=document.createElement("h1");
    textGalerie1.textContent="Une salle chaleureuse";
    galerie1.append(textGalerie1);
    galerie1.classList.add("galerieTest","galerieImage1");
    const galerie2=document.createElement("div");
    galerie2.classList.add("galerieTest","galerieImage2");
    const textGalerie2=document.createElement("h1");
    textGalerie2.textContent="L'hiver au Refuge";
    galerie2.append(textGalerie2);
    const galerie3=document.createElement("div");
    galerie3.classList.add("galerieTest","galerieImage3");
    const textGalerie3=document.createElement("h1");
    textGalerie3.textContent="Une salle chaleureuse";
    galerie3.append(textGalerie3);
    const galerie4=document.createElement("div");
    galerie4.classList.add("galerieTest","galerieImage4");
    const textGalerie4=document.createElement("h1");
    textGalerie4.textContent="L'hiver au Refuge";
    galerie4.append(textGalerie4);
    const galerie5=document.createElement("div");
    galerie5.classList.add("galerieTest","galerieImage5");
    const textGalerie5=document.createElement("h1");
    textGalerie5.textContent="Une salle chaleureuse";
    galerie5.append(textGalerie5);
    const galerie6=document.createElement("div");
    galerie6.classList.add("galerieTest","galerieImage6");
    const galerie7=document.createElement("div");
    galerie7.classList.add("galerieTest","galerieImage7");
    const textGalerie7=document.createElement("h1");
    textGalerie7.textContent="L'hiver au Refuge";
    galerie7.append(textGalerie7);
    const galerie8=document.createElement("div");
    galerie8.classList.add("galerieTest","galerieImage8");
    const galerie9=document.createElement("div");
    galerie9.classList.add("galerieTest","galerieImage9");
    const textGalerie9=document.createElement("h1");
    textGalerie9.textContent="L'hiver au Refuge";
    galerie9.append(textGalerie9);
    const galerie10=document.createElement("div");
    galerie10.classList.add("galerieTest","galerieImage10");
    const galerie11=document.createElement("div");
    galerie11.classList.add("galerieTest","galerieImage11");
    const galerie12=document.createElement("div");
    galerie12.classList.add("galerieTest","galerieImage12");
    galerie.append(galerie1,
        galerie2,
        galerie3,
        galerie4,
        galerie5,
        galerie6,
        galerie7,
        galerie8,
        galerie9,
        galerie10,
        galerie11,
        galerie12,
        );
    conteneurGalerie.append(galerie)
    return conteneurGalerie;
}



export{ createBodyAccueil,createBodyMenu,createBodyReservation,createBodyGalerie }