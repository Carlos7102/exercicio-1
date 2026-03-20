import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';

export function Formulario({ lista, setLista }){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [submitted, setSubmitted] = useState(false)
        
    const canSubmit = !!(nome && email && telefone)
        
    function submitForm(nome,email,telefone){
        //if(submitted === true) return null
        if(email.includes("@") === false) return null
                
        if(nome.lenght < 3) return null
            
        const formulario = {
            nome: nome,
            email: email,
            telefone: telefone,
        };
                  
        setLista([...lista, formulario ])
        setNome("")
        setEmail("")
        setTelefone("")
        setSubmitted(true)
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.badge}> Formulário</Text>
            </View>
    
            <View style={styles.header}>
                <Text style={styles.title}>Entre em contato</Text>
                <Text style={styles.subtitle}>Prencha os campos abaixo com a informação</Text>
            </View>
             
            <KeyboardAvoidingView behavior='padding'>  
                <View style={styles.card}>
                    <View style={styles.grupo}>
                        <Text style={styles.label}>Nome Completo </Text>
                        <TextInput 
                         style={styles.input} 
                         placeholder='Digite seu Nome' 
                         value={nome}
                         onChangeText={(texto) => setNome(texto)}
                         textContentType='name'
                        />
                    </View>
    
                    <View style={styles.grupo}>
                        <Text style={styles.label}> Email </Text>
                        <TextInput 
                         style={styles.input} 
                         placeholder='Digite seu Email' 
                         value={email}
                         onChangeText={(texto) => setEmail(texto)}
                         keyboardType='email-address'
                        />
                    </View>
    
                    <View style={styles.grupo}>
                        <Text style={styles.label}> Telefone </Text>
                        <TextInput 
                         style={styles.input} 
                         placeholder='Digite seu Telefone' 
                         value={telefone}
                         onChangeText={(texto) => setTelefone(texto)}
                         keyboardType='number-pad'
                        />
                    </View>
    
                    <TouchableOpacity 
                     // disabled={!canSubmit}      
                      onPress={() => submitForm(nome, email, telefone)}
                      style={{
                        marginTop: 8,
                        backgroundColor: submitted ? "#32880a" : "#000000",
                        borderRadius: 16,
                        paddingVertical: 16,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Text style={styles.buttonText}>{submitted ? "Informações Salvas!" : (canSubmit ? "Enviar" : "Preencha as informações")}</Text>
                    </TouchableOpacity>
    
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: '#F7F8FA'
    },
    container: {
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 32,
        justifyContent: 'center',
    },
    header: {
        marginBottom: 24,
    },
    badge: {
        alignSelf: 'flex-start',
        backgroundColor: '#E8EEF9',
        color: '#3B82F6',
        fontSize: 12,
        fontWeight: '700',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 999,
        marginBottom: 14,
        marginTop: 25,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 15,
        color: '#6B7280',
        lineHeight: 22,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.06,
        shadowRadius: 18,
        elevation: 4,
    },
    grupo: {
        marginBottom: 18,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 8,
    },
    input: {
        width: '100%',
        backgroundColor: '#F9FAFB',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 15,
        color: '#111827',
    },
    button: {      
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
    },
});
