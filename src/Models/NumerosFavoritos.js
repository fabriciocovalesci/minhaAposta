import AsyncStorage_Favorito from '@react-native-async-storage/async-storage';


const SetMegaSena = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('megasena', jsonValue)
    } catch (e) {
        console.error(e)
    }
}


const SetLotoFacil = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('lotofacil', jsonValue)
    } catch (e) {
        console.error(e)
    }
}



const SetLotoMania = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('lotomania', jsonValue)
    } catch (e) {
        console.error(e)
    }
}


const SetQuina = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('quina', jsonValue)
    } catch (e) {
        console.error(e)
    }
}