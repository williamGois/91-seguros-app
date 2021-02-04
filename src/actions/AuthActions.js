export const intiProduto = () => {

    return (dispatch) => {
      
        try {
            
            return fetch('https://fiuzas.com.br/91-seguros/api/produtos', {
                method: 'GET',
            }).then((response) => response.json()).then((responseJson) => {
                dispatch({
                    type: 'produtos',
                    payload: {
                        produtos: responseJson,
                    }
                });
            }).catch((error) => {
                alert(JSON.stringify(error));
            });
        } catch (error) {
            
        }
    }
}

export const idProduto = (id) => {

    return (dispatch) => {
        dispatch({
            type: 'add_id_produto',
            payload: {
                id_produto: id,
            }
        });
    }
}

export const intiProdutoImagemProdutos = (id) => {

    return (dispatch) => {
      
        try {
            return fetch('https://fiuzas.com.br/91-seguros/api/produto/'+id+'', {
                method: 'GET',
            }).then((response) => response.json()).then((responseJson) => {

                // alert(JSON.stringify(responseJson));
                dispatch({
                    type: 'imagem_produtos',
                    payload: {
                        produtosInternal: responseJson,
                    }
                });
            }).catch((error) => {
            });
        } catch (error) {
        }
    }
}