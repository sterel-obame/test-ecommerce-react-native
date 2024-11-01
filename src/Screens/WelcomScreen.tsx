import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
//   import colors from "../../config/Restaurant/colors";
//   import 10 from "../../config/10";

const WelcomScreen = () => {
    const navigation = useNavigation()
    const colors = {
        black: "#000",
        dark: `rgb(70,70,70)`,
        yellow: `rgb(250,230,50)`,
        gray: `rgb(120,120,120)`,
        light: `rgb(240,240,240)`,
        white: "#fff",
    };

    return (
        <ImageBackground
        style={{ flex: 1 }}
        source={require("../../assets/BURGER/b6.png")}
        >
            <View style={{ flex: 1, backgroundColor: colors.black, opacity: 0.2 }} />
            <View
            style={{
                position: "absolute",
                height: "100%",
                zIndex: 2,
                width: "100%",
                justifyContent: "flex-end",
                paddingHorizontal: 10 * 2,
                paddingBottom: 10 * 5,
            }}
            >
            <View>
                <Text
                style={{
                    color: colors.white,
                    fontWeight: "800",
                    fontSize: 10 * 4.5,
                    textTransform: "capitalize",
                }}
                >
                Laissez votre plat préféré vous trouver
                </Text>
                <Text
                style={{
                    color: colors.white,
                    fontWeight: "600",
                    fontSize: 10 * 1.7,
                }}
                >
                Dolore reprehenderit id ea eu voluptate deserunt occaecat occaecat.
                </Text>
                <TouchableOpacity
                onPress={()=>navigation.navigate("home")}
                    style={{
                        padding: 10 * 2,
                        backgroundColor: colors.white,
                        borderRadius: 10 * 2,
                        alignItems: "center",
                        marginTop: 10 * 3,
                    }}
                >
                    <Text
                        style={{
                            color: colors.black,
                            fontSize: 10 * 2,
                            fontWeight: "700",
                        }}
                    >
                        Explorer maintenant
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
        </ImageBackground>
    )
}

export default WelcomScreen

const styles = StyleSheet.create({})