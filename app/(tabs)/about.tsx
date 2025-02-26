import { Text, View } from 'react-native';
import "../../global.css"

export default function AboutScreen() {
    return (
        <View className="flex-1 p-5 bg-gray-700 justify-center items-center">
            <Text className="color-white">A vida não é útil. Ela não existe para cumprir uma função, para ser medida ou justificada. Não é uma ferramenta, um recurso ou um meio para um fim. A vida simplesmente flui, desordenada e imprevisível, sem a obrigação de servir a um propósito maior. Ela não se importa com planos, metas ou expectativas. É um fenômeno bruto, que acontece sem pedir licença, sem se explicar, sem se desculpar. A vida não é útil porque não precisa ser. Ela apenas é — e, nessa ausência de utilidade, reside sua liberdade e sua essência mais pura.</Text>
        </View>
    )
}