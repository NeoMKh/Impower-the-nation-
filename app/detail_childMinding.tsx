import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router'

export default function detail_childMinding() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#793d09",
            }}
        >
            <Text style={styles.Titel}>Child Mending</Text>
            <Text style={styles.container}>
            Child mending, often referred to as child development or parenting practices, involves nurturing and supporting a child's physical, emotional, and social growth.
            This includes providing care, guidance, and education to help children build skills, understand their emotions, and develop healthy relationships. 
            Effective child mending fosters resilience, creativity, and a sense of security, allowing children to thrive and reach their full potential.
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
