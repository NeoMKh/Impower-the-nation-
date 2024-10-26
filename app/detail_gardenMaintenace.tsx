import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function detail_gardenMaintenace() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#793d09",
            }}
        >
            <Text style={styles.Titel}>Garden Maintenance</Text>
            <Text style={styles.container}>
            Water restrictions and the watering requirements of indigenous and exotic plants

            Pruning and propagation of plants

            Planting techniques for different plant types

            Garden maintenance involves the regular care and upkeep of a garden to keep it healthy and attractive.
            This includes tasks like watering, weeding, pruning, mowing, fertilizing, and pest control. 
            Garden maintenance also involves cleaning up fallen leaves, mulching, and monitoring plant health to ensure proper growth. 
            Regular care helps plants thrive and keeps the garden looking neat and well-tended throughout the seasons.
            </Text>
            <Link href="/Summary6MonthCourse"  style={styles.link}>
                <Text style={styles.linkText}>Summary 6 month course</Text>
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