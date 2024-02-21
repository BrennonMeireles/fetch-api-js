// Esperar que o DOM esteja totalmente carregado antes de executar o código.

document.addEventListener("DOMContentLoaded", function () {
    
    // obter o elemento HTML para exibir a list de usuarios  
    const userListElement = document.getElementById('lista-usuarios')

    // Vvamos fazer a requisição do dados usando fetch()
    fetch ( 'https://jsonplaceholder.typicode.com/users' )

    // o metodo then() é usado para tratar a promessa retornada pelo metodo fetch()
        .then(resposta => resposta.json())

        .then(user => {
            const userListItems = user.map(user => {
                // qual a diferença de user e users?

                // para cada usuario ria uma StringHTML representando as info do usuario
                // ` -> template string
                return `<div class="user">
                            <h2>${user.name}</h2>
                            <p> ${user.email}</p>
                            <p> ${user.website}</p>
                        </div>`
            })

            // Vamos inserir os itens da lista de usuario
            // <div id = 'lista-usuarios'>
            userListElement.innerHTML = userListItems.join('')
        })

        // vamos fazer o tratamento de erro caso ocorra durante a requisição dos dados - users
        // .catch(error =>) {
        //     console.log
        // }

})