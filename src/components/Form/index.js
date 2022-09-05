import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import ResultImc from "./ResultImc/"
import styles from "./style"

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validation() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc e igual: ")
            setTextButton("Calcular Novamente")
            return
        } else {
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e a altura")
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>
                    Altura
                </Text>
                    <TextInput
                        onChangeText={setHeight}
                        value={height}
                        placeholder='EX: 1.75'
                        keyboardType='numeric'
                        style={styles.input}/>
                        
                <Text style={styles.formLabel}>
                    Peso
                </Text>
                    <TextInput
                        onChangeText={setWeight}
                        value={weight}
                        placeholder='EX: 75.365'
                        keyboardType='numeric'
                        style={styles.input}/>
                    <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => { validation() }}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}

