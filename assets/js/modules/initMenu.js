const initMenu = (data) => {
    const ulPrincipal = document.createElement("ul");
    ulPrincipal.id = "ulPrincipal";
    document.querySelector('header nav').prepend(ulPrincipal);

    data.forEach((element,index) => {
        const liSubMenu = document.createElement("li");
        liSubMenu.innerText = element.text;
        ulPrincipal.append(liSubMenu);
        liSubMenu.addEventListener("click", () => {
            console.dir(element.subMenu);
            if(!element.displaySubmenu)
            {
                const ulSecondary = document.createElement("ul");
                ulSecondary.classList.add("ulSecondary");
                ulSecondary.id = "ulSecondary"+index;
                liSubMenu.append(ulSecondary);

                element.subMenu.forEach(elementSub => {
                    console.dir(elementSub);
                    const liSubSubMenu = document.createElement("li");
                    liSubSubMenu.innerText = elementSub.title;
                    ulSecondary.append(liSubSubMenu);
                });
            }
            else
            {
                document.querySelector("#ulSecondary" + index).remove();
            }
            element.displaySubmenu = !element.displaySubmenu;
        })
    });
};
export { initMenu };