

import Entypo from '@expo/vector-icons/Entypo';
import axios from "axios";
import { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App(){

    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)
    const [carregando, setCarregando] = useState(false)

    async function buscarCep(){
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()
        setEndereco(data)
    }

    async function buscarCepComAxios(){
        setCarregando(true)
        const { data, status, error} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        setEndereco(data)
        setCarregando(false)
    }

    return(
        <View style={styles.container}>

            <View style={styles.logo}>  
                <Entypo name="location" size={55} color="black"/>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Digite o CEP"
                value={cep}
                onChangeText={setCep}
            />

            <TouchableOpacity style={styles.button} onPress={buscarCepComAxios}>
                <Text style={styles.text}>Buscar</Text>
            </TouchableOpacity>

            {carregando && <ActivityIndicator/>}

            {endereco && carregando === false && (
                <View style={styles.card}>
                    <Text>Logradouro: {endereco.logradouro}</Text>
                    <Text>Bairro: {endereco.bairro}</Text>
                    <Text>Cidade: {endereco.localidade}</Text>
                    <Text>Estado: {endereco.estado}</Text>
                    <Text>Região: {endereco.regiao}</Text>
                </View>
            )}   

        </View>
    )
}

 export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor:"#ffffff",
    },
    logo: {
        backgroundColor: "rgb(255, 255, 255)",
        height: 100,
        width: 100,
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 50,
        marginTop: 100,
        borderColor: "black",
        borderWidth: 1,
    },
    input: {
        marginTop: 60,
        backgroundColor:"#f0f0f0",
        borderRadius: 20,
        width: "80%",
        height: 45,
        borderColor: "gray",
        borderWidth: 1,
        paddingLeft: 15,
    },
    button: {
        marginTop: 50,
        backgroundColor: "#000000",
        width:"45%",
        height: 50,
        borderRadius: 15,
        alignItems:"center",
        justifyContent:"center",
    },
    text: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "600" 
    },
    card: {
        backgroundColor: "#f7fafa",
        borderRadius: 20,
        paddingLeft:20,
        justifyContent:"center",
        width:"70%",
        height: 130,
        marginTop: 50,
        borderColor: "black",
        borderWidth: 1,
    }
})