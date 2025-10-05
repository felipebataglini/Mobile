import { View, Text } from 'react-native'
import Botao from '../components/Botao'

const Home = (props) => {

    const cadastrarPesquisa = () => {
        props.navigation.navigate('NovaPesquisa')
    }

    const opcoesPesquisa = () => {
        props.navigation.navigate('AcaoPesquisa')
    }

    const agradecimento = () => {
        props.navigation.navigate('Agradecimento')
    }

    return (

        <View>
            <Botao texto="BOTÃO TEMPORÁRIO (simula ícones pesquisa)" funcao={opcoesPesquisa} />
            <Botao texto='NOVA PESQUISA' funcao={cadastrarPesquisa}></Botao>
            <Botao texto='Tela agradecimento temp' funcao={agradecimento}></Botao>
        </View>
    )
}

export default Home