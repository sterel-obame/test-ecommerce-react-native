import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import data from "../data/data"
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

  const ITEM_WIDTH = width / 2 - 10 * 3;

const Home: React.FC = ({navigation }) => {
    const nav = useNavigation(); // Hook pour accéder à la navigation
    const navigat = useNavigation()
    const [activeCategory, setActiveCategory] = useState(0);
    const colors = {
        black: "#000",
        dark: `rgb(70,70,70)`,
        yellow: `rgb(250,230,50)`,
        gray: `rgb(130,130,130)`,
        light: `rgb(240,240,240)`,
        white: "#fff",
    };
    
    return (
        <SafeAreaView style={{marginTop:30}}>
            <ScrollView>
                <View style={{ padding: 10 * 2 }}>

                    {/* partie du haut avec les deux icones de droite */}
                    <View
                        style={{ flexDirection: "row", justifyContent: "space-between", position:'static' }}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                style={{
                                    width: 10 * 4.5,
                                    height: 10 * 4.5,
                                    borderRadius: 10 * 3,
                                    marginRight: 10,
                                }}
                                source={require("../../assets/BURGER/b1.png")}
                            />
                            <Text
                                style={{
                                    fontSize: 10 * 1.7,
                                    fontWeight: "800",
                                    color: colors.dark,
                                }}
                            >
                                La moyenne
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            {/* bouton de notification */}
                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <View style={{position:"relative"}}>
                                    <Ionicons
                                        name="notifications-outline"
                                        size={10 * 3.5}
                                        color={colors.dark}
                                    />
                                    <Text style={{position:"absolute", right:-3, top:-10, color:'#f4511e' }}>15</Text>
                                </View>
                            </TouchableOpacity>

                            {/* boutton du menu */}
                            <TouchableOpacity
                                onPress={() => navigation.openDrawer()}
                            >
                                <Ionicons
                                name="menu"
                                size={10 * 3.5}
                                color={colors.dark}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ width: "60%", marginTop: 10 * 2 }}>
                        <Text style={{ fontSize: 10 * 3, fontWeight: "700" }}>
                        Que souhaitez-vous commander ?
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            backgroundColor: colors.light,
                            marginVertical: 10 * 3,
                            padding: 10 * 1.5,
                            borderRadius: 10,
                            borderWidth:2
                        }}
                    >
                        <Ionicons name="search" color={colors.gray} size={10 * 2.7} />
                        <TextInput
                            placeholder="Want to ..."
                            placeholderTextColor={colors.gray}
                            style={{
                                color: colors.gray,
                                fontSize: 10 * 2,
                                marginLeft: 10,
                            }}
                        />
                    </View>

                    <ScrollView horizontal>
                        {data.map((category, index) => (
                        <TouchableOpacity
                            style={{ marginRight: 10 * 3 }}
                            key={index}
                            onPress={() => setActiveCategory(index)}
                        >
                            <Text
                                style={[
                                    {
                                        fontSize: 10 * 1.7,
                                        fontWeight: "600",
                                        color: colors.gray,
                                    },
                                    activeCategory === index && {
                                        color: colors.black,
                                        fontWeight: "700",
                                        fontSize: 10 * 1.8,
                                    },
                                ]}
                            >
                            {category.title}
                            </Text>
                        </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <View
                        style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        marginVertical: 10 * 2,
                        }}
                    >
                        {data[activeCategory].recipes.map((item) => (
                        <TouchableOpacity
                            style={{ width: ITEM_WIDTH, marginBottom: 10 * 2 }}
                            key={item.id}
                            onPress={()=>navigat.navigate<string>("detail", item)}
                        >
                            <Image
                            style={{
                                width: "100%",
                                height: ITEM_WIDTH + 10 * 3,
                                borderRadius: 10 * 2,
                            }}
                            source={item.image}
                            />
                            <Text
                            style={{
                                fontSize: 10 * 2,
                                fontWeight: "700",
                                marginTop: 10,
                            }}
                            >
                            {item.name}
                            </Text>
                            <Text
                            style={{
                                fontSize: 10 * 1.5,
                                color: colors.gray,
                                marginVertical: 10 / 2,
                            }}
                            >
                            Today discount {item.discount}
                            </Text>
                            <Text style={{ fontSize: 10 * 2, fontWeight: "700" }}>
                            $ {item.price}
                            </Text>
                        </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})