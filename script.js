document.addEventListener("DOMContentLoaded", function () {
    // Alternância de tema (Modo Escuro/ Claro)
    const body = document.body;
    const toggle = document.getElementById("dark-mode-toggle");
    const icon = document.getElementById("theme-icon");

    // Verifique se o tema salvo é o modo escuro e aplica
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark");
        icon.className = "fas fa-sun"; // Altera para o ícone de sol
    } else {
        body.classList.remove("dark");
        icon.className = "fas fa-moon"; // Mantém o ícone de lua
    }

    // Alterna entre os modos e troca os ícones
    toggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        
        // Atualiza o ícone
        if (body.classList.contains("dark")) {
            icon.className = "fas fa-sun"; // Muda para sol no modo escuro
            localStorage.setItem("theme", "dark");
        } else {
            icon.className = "fas fa-moon"; // Muda para lua no modo claro
            localStorage.setItem("theme", "light");
        }
    });

    // Menu hambúrguer
    const menuToggle = document.getElementById("menu-toggle");
    const menuItems = document.querySelector(".menu-items");

    if (menuToggle && menuItems) {
        menuToggle.addEventListener("click", () => {
            // Alterna a classe para abrir e fechar o menu
            menuItems.classList.toggle("show");
            // Troca o ícone para X quando o menu está aberto
            const icon = menuToggle.querySelector("i");
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        });

        // Quando o usuário clicar fora do menu, o menu será fechado
        document.addEventListener("click", (event) => {
            if (!menuItems.contains(event.target) && !menuToggle.contains(event.target)) {
                menuItems.classList.remove("show");
                const icon = menuToggle.querySelector("i");
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-times");
            }
        });
    }

    // Botão voltar ao topo
    const btnTopo = document.getElementById("btn-topo");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    });

    btnTopo.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
