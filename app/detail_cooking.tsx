import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router'

export default function detail_cooking() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#793d09",
            }}
        >
            <Text style={styles.Titel}>Cooking</Text>
            <Text style={styles.container}>
            Cooking is the process of preparing food by combining ingredients and applying heat to create meals.
            It involves various techniques, such as chopping, boiling, baking, and frying, and can range from simple recipes to complex culinary creations. 
            Cooking not only transforms raw ingredients into delicious dishes but also reflects cultural traditions and personal creativity.
            </Text>
            <Link href="/summary_6week_course" style={styles.link}>
                <Text style={styles.linkText}>Summary 6 week course</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {       
        backgroundColor: "lightgrey",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        borderBlockColor: "black",
        borderWidth: 2,
        borderRadius: 10,
    },
    Titel: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        backgroundColor: "lightgrey",
        padding: 5,
        borderRadius: 10,
    },
    link: {
        marginVertical: 10,
    },
    linkText: {
        color: '#cf8929',
        textDecorationLine: 'underline',
        fontSize: 24,
        backgroundColor: "lightgrey",
        padding: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "black",
    }

})
