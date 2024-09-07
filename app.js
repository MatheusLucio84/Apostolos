function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
 
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
   
    if (!campoPesquisa) {
        section.innerHTML = "NADA FOI ENCONTRADO, DIGITE SUA PESQUISA"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descrição = "";
    let tags = "";
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descrição = dado.descrição.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
    if(titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa))
        {
//cria novo elemento
    
                // Cria um novo elemento div para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a> </h2>
                <p class="Descricao-meta">${dado.descrição}</p> 
                <a href=${dado.link} target="_blank">Mais informações</a> </div>
        `;
    }
}

if(!resultados){
    resultados = <p>"NADA FOI ENCONTRADO"</p>;
}
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}