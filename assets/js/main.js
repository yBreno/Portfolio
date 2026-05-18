const root = document.body;
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const themeToggle = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const savedTheme = localStorage.getItem("portfolio-theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const insta_icon = document.getElementById("insta_icon");
const linkedin_icon = document.getElementById("linkedin_icon");
const github_icon = document.getElementById("github_icon");

const icons_sociais = {

    claro: {
        instagram: "assets/images/fotos/InstagramPreto.png",
        linkedin: "assets/images/fotos/LinkedinPreto.png",
        github: "assets/images/fotos/GithubPreto.png",
    },

    escuro: {
        instagram: "assets/images/fotos/InstagramBranco.png",
        linkedin: "assets/images/fotos/LinkedinBranco.png",
        github: "assets/images/fotos/GithubBranco.png",
    },

};

function atualizarIconesSociais() {

    const temaClaroAtivo =
    root.classList.contains("light-theme");

    const iconesAtuais =
    temaClaroAtivo
        ? icons_sociais.claro
        : icons_sociais.escuro;

    insta_icon.src = iconesAtuais.instagram;
    linkedin_icon.src = iconesAtuais.linkedin;
    github_icon.src = iconesAtuais.github;
}


if (savedTheme === "light" || (!savedTheme && prefersLight)) {
    root.classList.add("light-theme");
}

atualizarIconesSociais();


mobileMenuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open");
        mobileMenuButton.setAttribute("aria-expanded", "false");
    });
});

themeToggle.addEventListener("click", () => {
    const isLight = root.classList.toggle("light-theme");
    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
    atualizarIconesSociais();
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const message = name
        ? `Ola! Me chamo ${name}. Vi seu portfolio e gostaria de saber mais.`
        : "Ola! Vi seu portfolio e gostaria de saber mais.";
    const url = `https://api.whatsapp.com/send?phone=5514997493687&text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
});
