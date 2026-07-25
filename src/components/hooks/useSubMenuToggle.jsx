"use client"
const useSubMenuToggle = () => {

    const toggleSubMenu = (e) => {
        e.preventDefault();
        const listItem = e.target.closest('li.dropdown');
        const subMenu = listItem ? listItem.querySelector('ul.dropdown-menu') : null;

        if (subMenu) {
            listItem.classList.toggle('on');
            subMenu.style.maxHeight = subMenu.style.maxHeight === '20000px' ? '0' : '20000px';
        }
    };

    return toggleSubMenu;
};

export default useSubMenuToggle;