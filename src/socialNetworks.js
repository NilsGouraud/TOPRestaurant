const createSocialNetworksButtons=()=>{
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

    return ulSocialNetworks;
}

export{createSocialNetworksButtons};