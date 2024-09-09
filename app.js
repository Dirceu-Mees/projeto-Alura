
function pesquisar() {
    // Busca a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada para pesquisar</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            
            resultados += `
            <div class="item-resultado">
                <h2>
                  <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descrição-meta">${dado.descricao}</p>
                <a href=${dado.link} target="blank">Mais informações</a>
              </div>
            `;
        }
       
    }
  
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Insere o HTML gerado na seção dos resultados
    section.innerHTML = resultados;
  }

