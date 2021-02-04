import React, { Component } from 'react';
import { View, ActivityIndicator, RefreshControl, Text, FlatList, StyleSheet, ImageBackground, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { add_produto, intiProduto, idProduto } from '../actions/AuthActions';

export class Produto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };

        this.props.intiProduto();

    }

    renderFooter() {
        return (
            <View style={styles.loading}>
                {(this.props.feedLoading == true) &&
                    <ActivityIndicator size="large" color="#0078FF" />
                }
            </View>
        );
    };

    gotoProduto(id) {

        this.props.idProduto(id);
        this.props.navigation.replace('ProdutoInternal');
    }

    _onRefresh() {
        this.props.intiProduto();
    }

    render() {
        return (
            <View style={{ paddingTop:50, flexGrow: 1, backgroundColor: "#f3f3f3", }}>
                {(this.props.produtos.hasOwnProperty('produtos')) &&
                    <FlatList
                        data={this.props.produtos.produtos}
                        extraData={this.props}
                        renderItem={({ item }) => <TouchableOpacity onPress={() => { this.gotoProduto(item.id); }} ><ListarProdutos data={item} /></TouchableOpacity>}
                        keyExtractor={(item, index) => item.id}
                        onEndReachedThreshold={0.1}
                        bounces={false}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                            />
                        }
                        onEndReached={() => {
                            if (this.props.feedLoading == false) {
                                this.props.intiProduto();
                            }
                        }}
                    />
                }


                {(!this.props.produtos.hasOwnProperty('produtos')) &&
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                        <Text style={{ color: "#000000", fontSize: 20 }}>Não possui produtos no momento!</Text>
                    </View>
                }

                {this.props.pesquisa == true &&
                    <View>{this.renderFooter()}</View>
                }

            </View>

        );
    }
}

class ListarProdutos extends Component {
    render() {
        return (
            <View style={{ padding: 20, paddingBottom: 0, paddingTop: 0 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center", backgroundColor: "#FFFFFF", padding: 10, borderBottomWidth: 1, borderBottomColor: "#000000" }} >
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center", width: "70%", paddingLeft: 20 }} >
                        <Text style={{ fontSize: 20, color: "#000000" }} >{this.props.data.titulo}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center", width: "30%" }} >
                        <Image source={{ uri: "https://fiuzas.com.br/91-seguros/upload/tumb/" + this.props.data.imagem + "" }} style={styles.logoProduto} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#000000"
    },
    image: {
        height: 250,
        resizeMode: "cover",
        justifyContent: "center",
        borderRadius: 25,
        marginBottom: 40,
        backgroundColor: "#000000"
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    },
    logoArea: {
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    logoProduto: {
        width: 80,
        height: 80,
        borderRadius: 20
    },
    logo: {
        marginTop: 60,
    },
    checkbox: {
        alignSelf: "center",
    },
    inputArea: {
        marginTop: 25,
        paddingRight: 40,
        paddingLeft: 40,
    },
    entreAgora: {
        fontSize: 24
    },
    labelInput: {
        fontSize: 17
    },
    input: {
        height: 60,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#FFF",
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        color: "#FFF",
        padding: 10,
        paddingLeft: 20,
        fontSize: 17
    },
    btn: {
        flex: 1,
        height: 60,
        backgroundColor: '#0078FF'
    },
    textBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtnEntrar: {
        fontSize: 22,
        color: 'white'
    }
});


const mapStateToProps = (state) => {
    return {
        produtos: state.auth.produtos
    };
};

const ProdutoConnect = connect(mapStateToProps, { add_produto, intiProduto, idProduto })(Produto);

export default ProdutoConnect;
