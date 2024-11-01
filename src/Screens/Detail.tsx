import {
    Dimensions,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";

// import 10 from "../../config/10";
const { height } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import colors from "../../config/Restaurant/colors";

const Detail = ({route}) => {
    const recipe = route.params
    // console.log(route)
    console.log(recipe)
    const colors = {
        black: "#000",
        dark: `rgb(70,70,70)`,
        yellow: `rgb(250,230,50)`,
        gray: `rgb(120,120,120)`,
        light: `rgb(240,240,240)`,
        white: "#fff",
    };
    const navigate = useNavigation()
    return (
        <>
            <ScrollView>
                <View>
                    <ImageBackground
                        style={{
                            padding: 10 * 2,
                            height: height / 2.5,
                            padding: 10 * 2,
                            paddingTop: 10 * 4,
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                        source={require("../../assets/img/img4.jpeg")}
                    >
                        {/* bouton retour */}
                        <TouchableOpacity
                            onPress={()=>navigate.goBack()}
                            style={{
                                height: 10 * 4.5,
                                width: 10 * 4.5,
                                backgroundColor: colors.white,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10 * 2.5,
                            }}
                        >
                            <Ionicons
                                name="arrow-back"
                                size={10 * 2.5}
                                color={colors.gray}
                            />
                            </TouchableOpacity>

                            {/* bouton haut de droite avec une flèche montante */}
                            <TouchableOpacity
                                style={{
                                    height: 10 * 4.5,
                                    width: 10 * 4.5,
                                    backgroundColor: colors.white,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 10 * 2.5,
                                }}
                            >
                            <Ionicons name="share" size={10 * 2.5} color={colors.gray} />
                        </TouchableOpacity>
                    </ImageBackground>
                    
                    {/* partie qui affiche le détails */}
                    <View
                        style={{
                            padding: 10 * 2,
                            paddingTop: 10 * 3,
                            marginTop: -10 * 3,
                            borderTopLeftRadius: 10 * 3,
                            borderTopRightRadius: 10 * 3,
                            backgroundColor: colors.white,
                        }}
                    >
                        <View
                        style={{
                            flexDirection: "row",
                            marginBottom: 10 * 3,
                            alignItems: "center",
                        }}
                        >
                        <View style={{ width: "70%" }}>
                            <Text
                            style={{
                                fontSize: 10 * 3,
                                color: colors.black,
                                fontWeight: "700",
                            }}
                            >
                            {recipe.name}
                            </Text>
                        </View>
                        <View
                            style={{
                                padding: 10,
                                paddingHorizontal: 10 * 3,
                                backgroundColor: colors.yellow,
                                flexDirection: "row",
                                borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Ionicons
                            name="star"
                            color={colors.black}
                            size={10 * 1.7}
                            />
                            <Text
                            style={{
                                fontSize: 10 * 1.6,
                                fontWeight: "600",
                                marginLeft: 10 / 2,
                                color: colors.black,
                            }}
                            >
                            {recipe.rating}
                            </Text>
                        </View>
                        </View>
                        <View
                        style={{ flexDirection: "row", justifyContent: "space-between" }}
                        >
                        <View
                            style={{
                                padding: 10,
                                paddingHorizontal: 10 * 2,
                                backgroundColor: colors.light,
                                flexDirection: "row",
                                borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Ionicons
                            name="time"
                            color={colors.gray}
                            size={10 * 1.7}
                            />
                            <Text
                            style={{
                                fontSize: 10 * 1.6,
                                fontWeight: "600",
                                marginLeft: 10 / 2,
                                color: colors.gray,
                            }}
                            >
                            {recipe.time}
                            </Text>
                        </View>
                        <View
                            style={{
                                padding: 10,
                                paddingHorizontal: 10 * 2,
                                backgroundColor: colors.light,
                                flexDirection: "row",
                                borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Ionicons
                                name="bicycle"
                                color={colors.gray}
                                size={10 * 1.7}
                            />
                            <Text
                                style={{
                                    fontSize: 10 * 1.6,
                                    fontWeight: "600",
                                    marginLeft: 10 / 2,
                                    color: colors.gray,
                                }}
                            >
                            {recipe.del_time}
                            </Text>
                        </View>
                        <View
                            style={{
                                padding: 10,
                                paddingHorizontal: 10 * 2,
                                backgroundColor: colors.light,
                                flexDirection: "row",
                                borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Ionicons
                                name="restaurant"
                                color={colors.gray}
                                size={10 * 1.7}
                            />
                            <Text
                                style={{
                                    fontSize: 10 * 1.6,
                                    fontWeight: "600",
                                    marginLeft: 10 / 2,
                                    color: colors.gray,
                                }}
                            >
                            {recipe.cooking_time}
                            </Text>
                        </View>
                        </View>
                        <View style={{ marginVertical: 10 * 3 }}>
                        <Text
                            style={{
                                fontSize: 10 * 2,
                                fontWeight: "700",
                                color: colors.dark,
                            }}
                        >
                            Ingredients
                        </Text>
                        {recipe.ingredients.map((ingredient) => (
                            <View
                            style={{
                                marginVertical: 10,
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                            key={ingredient.id}
                            >
                                <View
                                    style={{
                                        width: 10,
                                        height: 10,
                                        backgroundColor: colors.light,
                                        borderRadius: 10,
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: 10 * 1.7,
                                        fontWeight: "600",
                                        color: colors.gray,
                                        marginLeft: 10,
                                    }}
                                >
                                    {ingredient.title}
                                </Text>
                            </View>
                        ))}
                        </View>
                        <Text
                        style={{
                            fontSize: 10 * 2,
                            fontWeight: "700",
                            color: colors.dark,
                            marginBottom: 10,
                        }}
                        >
                        Description
                        </Text>
                        <Text
                        style={{
                            fontSize: 10 * 1.7,
                            fontWeight: "500",
                            color: colors.gray,
                        }}
                        >
                        {recipe.description}
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <SafeAreaView>
                <View style={{ padding: 10 * 2 }}>
                    {/* bouton noir choose this for $ */}
                    <TouchableOpacity
                        onPress={()=>navigate.navigate('welcome')}
                        style={{
                            width: "100%",
                            padding: 10 * 2,
                            backgroundColor: colors.black,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 10 * 2,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 10 * 2,
                                color: colors.white,
                                fontWeight: "700",
                            }}
                        >
                        Choose this for
                        </Text>
                        <Text
                            style={{
                                fontSize: 10 * 2,
                                color: colors.yellow,
                                fontWeight: "700",
                                marginLeft: 10 / 2,
                            }}
                        >
                        $ {recipe.price}
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Detail

const styles = StyleSheet.create({})