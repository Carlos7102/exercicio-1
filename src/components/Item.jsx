import { View, StyleSheet, Text } from 'react-native';

export function Item({nome, email, telefone}){
    return(
        <View style={style.item}>
            <View style={style.avatar}>
                <Text style={style.avatarText}>
                    {nome[0]}
                </Text>
            </View>
        
            <View style={style.grupo}> 
                <Text style={style.texto}>{nome}</Text>
                <Text style={style.texto}>{email}</Text>
                <Text style={style.texto}>{telefone}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flexDirection: "row",
        marginHorizontal: 35,
        backgroundColor: "#837c85",
        borderRadius: 16,
        paddingVertical: 10,
        marginTop: 5,
        justifyContent: "center",
        alignItems:"center",
        height:100,
        paddingRight: 5
    },
    avatar: {
        backgroundColor: "#4e7fbe",
        borderRadius: 500,
        width: 64,
        height: 64,
        justifyContent: "center",
        alignItems:"center",
        marginHorizontal: 16,
    },
    avatarText: {
        color: "white",
        fontWeight: "800",
        fontSize: 23,
    },
    grupo: {
        flexDirection: "column"
    },
    texto: {
       color: "white",
       fontSize: 14,
       fontWeight: "700",
  }
})
