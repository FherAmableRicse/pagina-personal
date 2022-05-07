
import { contacts } from "../utlis/contacts.js";
//sfc

const footer = (contacts) => {
    const footerNavLinkList = document.querySelector(".footer-nav__link-list");
    const footerNavCredit = document.querySelector(".footer-nav__credits");
    contacts
        .filter((contact) => contact.main)
        .forEach((contact) => {
            footerNavLinkList.innerHTML += `
          <li class="footer-nav__link-item">
              <a href="${contact.urlContact}" class="footer-nav__link">
                  <img src="${contact.urlImage}" alt="${contact.name}"
                  class="footer-nav__link-image" />
              </a>
           </li>
           `;
        });

    footerNavCredit.innerHTML += `
      🦄Copyright &copy; ${new Date().getFullYear()} <a href="https://www.linkedin.com/in/fher-amable-ricse-12730b176/"
      class="footer-nav__credits-author" target="_blank" rel="noreferrer">Fher Amable.</a> Todos
      los derechos
      reservados.🦄
      `;
}

export default footer;