const initMenu = (data) => {
    const ulPrincipal = document.createElement("ul");
    ulPrincipal.id = "ulPrincipal";
    document.querySelector('header nav').prepend(ulPrincipal);

    data.forEach(element => {
        const liSubMenu = document.createElement("li");
        let displaySubmenu = false;
        liSubMenu.innerText = element.text;
        ulPrincipal.append(liSubMenu);
        liSubMenu.addEventListener("click", () => {
            console.dir(element.subMenu);
        })
    });
};
export { initMenu };