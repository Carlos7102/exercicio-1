import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function App(){
    function entrar() {
      Alert.alert("Olá!")
    }
    return(
        <View style={styles.container}>    
            <Image
              source={require("../../assets/images/figma.png")}
              width={64}
              height={64}
              style={styles.logo}
            />
        
            <View style={styles.card}>
                <TextInput
                placeholder="E-mail"
                placeholderTextColor={"#2b2a2a"}
                style={styles.caixaT}
                />

                <TextInput
                placeholder="Senha"
                placeholderTextColor={"#2b2a2a"}
                style={styles.caixaT}
                />

                <TouchableOpacity onPress={entrar} style={styles.botao}>
                    <Text style={styles.textoBotao}>Entrar</Text>
                </TouchableOpacity>
            </View>          
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#ffffff",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 70,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 50,
        borderRadius: 60,
    },
    caixaT:{
        backgroundColor: "#f3f3f3",
        width: 300,
        height: 50,
        borderRadius: 20,
        paddingLeft: 15,
        fontWeight: "200",
    },
    card: {
        marginBottom: 250,
        backgroundColor:"#bbbaba",
        height: 240,
        justifyContent: "space-between",
        marginTop: 50,
        borderRadius: 25,
        padding: 15
    },
    botao:{
        backgroundColor:"#363535",
        width: 300,
        height: 50,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    textoBotao: {
        color: "#f1f1f1",
        fontSize: 20,
        fontWeight: "600"
    }
})