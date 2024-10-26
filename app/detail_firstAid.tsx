import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function detail_firstAid() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#793d09",
            }}
        >
            <Text  style={styles.Titel}>First Aid</Text>
            <Text style={styles.container}>First Aid
            Content:
            Wounds and bleeding

            Burns and fractures

            Emergency scene management

            Cardio-Pulmonary Resuscitation ("CPR")

            Respiratory distress e.g., Choking, blocked airway

            First aid is the immediate care given to someone who is injured or suddenly taken ill before professional medical help arrives.
            It includes basic techniques such as cleaning wounds, applying bandages, performing CPR, treating burns, and managing minor injuries like cuts or sprains.
            The goal of first aid is to prevent the condition from worsening, relieve pain, and potentially save lives in emergency situations.
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
