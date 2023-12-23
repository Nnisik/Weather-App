import { StyleSheet } from "react-native";

const colors = {
    "bg": "#FCF6F5",
    "fg": "#2BAE66",
};

const styles = StyleSheet.create({
    container: { 
        marginTop:25, 
        alignItems:"center", 
        flex:1, 
        backgroundColor: colors["bg"] 
    },
    topPanel: {
        alignItems: "center",
    },
    todayWeatherContainer: {
        flexDirection: "row",
    },
    todayWeather: {
        fontSize: 150,
        fontWeight: "bold",
        color: colors["fg"],
    },
    todayWeatherDecor: {
        fontSize: 80,
        fontWeight: "bold",
        color: colors["fg"],
    },
    todayWeatherInfo: {
        fontSize: 17,
        letterSpacing: 1,
        textAlign: "center"
    },
    bottomPanel: {
        alignItems: "center",
    },
    extraInfo: {
        width: 350,
        borderRadius: 20,
        borderColor: colors['fg'],
        borderWidth: 2,
        alignItems: "center",
        textAlign: "center",
    },
    infoContainer: {
        width: 300,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    infoElement: {
        alignItems: "center",
    },
    todayInfo: {
        textAlign: "center",
        justifyContent: "space-between",
        letterSpacing: 2,
        color: colors['fg'],
    },
    margin: {
        marginVertical: 10
    },
    padding: {
        paddingHorizontal: 15,
    },
    tableHeader: {
        borderBottomColor: colors['fg'],
        borderBottomWidth: 2,
    },
    tableHeaderText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1e2749"
    },
    forecastTableRow: {
        width: 330,
        flexDirection: "row",
        justifyContent: "space-between",
        textAlignVertical: "center",
        paddingVertical: 10,
        fontSize: 18
    },
    forecastDay: {
        fontSize: 15,
        color: "#1e2749"
    },
    forecastImage: {
        height: 40,
        width: 40,
    },
    forecastRowLeft: {
        flexDirection: "row",
    },
    forecastRowRight: {
        flexDirection: "row",
    },
    locationInfo: {
        marginVertical: 10,
        fontSize: 15,
        letterSpacing: 1,
        color: "#30343f"
    },
    textColor: {
        color: "#1e2749"
    }
});

export { styles }