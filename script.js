function carregarPagina(pagina) {

    const conteudo = document.getElementById("conteudo");

    conteudo.classList.add("pagina-saindo");

    setTimeout(() => {

        fetch(pagina)
            .then(response => response.text())
            .then(data => {

                conteudo.innerHTML = data;

                void conteudo.offsetWidth;

                conteudo.classList.remove("pagina-saindo");
                conteudo.classList.add("pagina-entrando");

                setTimeout(() => {
                    conteudo.classList.remove("pagina-entrando");
                }, 400);

                if (pagina === "contato.html" && typeof iniciarContato === "function") {
                    iniciarContato();
                }

                if (pagina === "servicos.html" && typeof iniciarServicos === "function") {
                    iniciarServicos();
                }

                if (pagina === "empresa.html" && typeof iniciarEmpresa === "function") {
                    iniciarEmpresa();
                }

            })
            .catch(() => {
                conteudo.innerHTML = "Erro ao carregar página.";
            });

    }, 250);
}
