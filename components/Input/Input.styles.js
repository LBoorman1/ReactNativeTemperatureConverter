import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputContainer: {
        alignSelf: "stretch",
        justifyContent: "center",
    }, 
    input: {
        backgroundColor: "white",
        height: 50,
        borderRadius: 20,
        alignSelf: "stretch",
        paddingLeft: 25
    },
    unit: {
        position: "absolute",
        alignSelf: "flex-end",
        paddingRight: 25,
        fontSize: 30
    }
});
