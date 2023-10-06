const initMenu = (data)=>{
    const ulPrincipal = document.createElement("ul");
    ulPrincipal.id = "ulPrincipal";
    document.querySelector('header nav').prepend(ulPrincipal);

    data.forEach(element => {
        const liSubMenu = document.createElement("li");
        liSubMenu.innerText = element.text;
        ulPrincipal.append(liSubMenu); 
    });
};
export {initMenu};