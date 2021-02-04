import React, { Component } from 'react';
import { connect } from 'react-redux';
import { intiProdutoImagemProdutos } from '../actions/AuthActions';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.imageview}>
          <Image style={styles.image} source={require('../images/logo.png')}></Image>
        </View>
        <View style={styles.footet}>
          <TouchableOpacity style={styles.button}  onPress={() => this.props.navigation.navigate('Produtos')}>
            <Text style={styles.buttonText}>Acessar Produtos</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  image: {
    width: "100%",
    height: "50%"
  },
  imageview: {
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    
  },
  footet: {
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "14%",
    padding: 15
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginBottom: 15,
    backgroundColor: "#e94332"
  },
  buttonText:{
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
    textAlign:"center",
    color: "#FFFFFF"
  }

})


const mapStateToProps = (state) => {
  return {
    id_produto: state.auth.id_produto,
    produtosInternal: state.auth.produtosInternal,
  };
};

const ProdutoConnect = connect(mapStateToProps, { intiProdutoImagemProdutos })(Home);

export default ProdutoConnect;
