const initialState = {
    produtos: [],
    produtosInternal: [],
    id_produto:''
};

const AuthReducer = (state = [], action) => {

    if (state.length == 0) {
        return initialState;
    }

    if (action.type == 'produtos') {
        return { ...state, produtos: action.payload.produtos };
    }

    if (action.type == 'add_id_produto') {
        return { ...state, id_produto: action.payload.id_produto };
    }

    if (action.type == 'imagem_produtos') {
        return { ...state, produtosInternal: action.payload.produtosInternal };
    }
    
    return state;
};

export default AuthReducer;