import React from 'react'
import styled from 'styled-components'
import QuadroProduto from './components/QuadroProduto'
import ListaFiltros from './components/ListaFiltros'
import Carrinho from './components/Carrinho'

const PaginaToda = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`
const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
const BotaoCarrinho = styled.div`
  height: 80px;
  width: 80px;
  bottom: 10px;
  right: 10px;
  position: absolute;
  border-radius: 93px;
background: #FFFFFF;
box-shadow:  -6px -6px 12px #DEDEDE,
             6px 6px 12px #FFFFFF;
`
const ImagemCarrinho = styled.img`
  height: 55px;
  width: 55px;
  padding: 15px 0 0 11px;
`







class App extends React.Component {
  state = {
    compras: [],
    mostraCarrinho: false,
    quantidadeProdutos: 0
  }


  escondeCarrinho = () => {
          this.setState({mostraCarrinho: !this.state.mostraCarrinho})
  }

  adicionaCarrinho = () => {
    const novoItemComprado = {
        id: Date.now(),
        quantidade: this.state.quantidadeProdutos,
        nomeProduto: ''
    };
    console.log("Adicionado!")
}

  render() {
    return (
      <PaginaToda>
      <ListaFiltros/>
      <Body>
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=55'}
          nomeProduto={'Item A'}
          precoProduto={'R$ 40.50'}
        />
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=56'}
          nomeProduto={'Item B'}
          precoProduto={'R$ 55.90'}
        />
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=57'}
          nomeProduto={'Item C'}
          precoProduto={'R$ 80.00'}
        />
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=58'}
          nomeProduto={'Item D'}
          precoProduto={'R$ 99.00'}
        />     
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=59'}
          nomeProduto={'Item E'}
          precoProduto={'R$ 199.00'}
        />
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=60'}
          nomeProduto={'Item F'}
          precoProduto={'R$ 210.00'}
        />
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=61'}
          nomeProduto={'Item G'}
          precoProduto={'R$ 499.99'}
        />
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=62'}
          nomeProduto={'Item H'}
          precoProduto={'R$ 501.00'}
        />
      </Body>
      {this.state.mostraCarrinho && <Carrinho />}
      <BotaoCarrinho onClick={this.escondeCarrinho}>
          <ImagemCarrinho src="https://lh3.googleusercontent.com/proxy/AKYqyzJ8N9qYHJ2haSBPuNxdMW3uRwSpCq6-qBpJs8QpcvoaM0HFOm1Tu6n_ZzjHrEQjImrD9BbUvAxYFhLevUHhGS5gzW7lMHIVzlw06J84GKSluadkTLpFfWgwQWU51sQ"></ImagemCarrinho> 
      </BotaoCarrinho> 
    </PaginaToda> 
    );
  }
}

export default App;
