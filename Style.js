import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: "#fafaff",
        height: 850,
    },
    gradient: {
        gradient: ""
    },
    topPanel: {
        alignItems: "center",
        marginTop: 100,
    },
    todayWeatherContainer: {
        flexDirection: "row",
    },
    todayWeather: {
        fontSize: 150,
        fontWeight: "bold",
        color: "#30343f"
    },
    todayWeatherDecor: {
        fontSize: 80,
        fontWeight: "bold",
        color: "#30343f"
    },
    todayWeatherInfo: {
        fontSize: 17,
        letterSpacing: 1,
        color: "#30343f"
    },
    bottomPanel: {
        alignItems: "center",
    },
    extraInfo: {
        width: 350,
        borderRadius: 20,
        backgroundColor: "#e4d9ff",
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
        color: "#30343f"
    },
    margin: {
        marginVertical: 10
    },
    padding: {
        paddingHorizontal: 15,
    },
    tableHeader: {
        borderBottomColor: "#273469",
        borderBottomWidth: 2,
    },
    tableHeaderText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1e2749"
    },
    forecastTableRow: {
        width: 330,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    forecastDay: {
        fontSize: 15,
        color: "#1e2749"
    },
    forecastImage: {
        height: 30,
        width: 30,
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