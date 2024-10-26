import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function detail_sewing() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#793d09",
            }}
        >
            <Text style={styles.Titel}>Life Skills</Text>
            <Text style={styles.container}>Life Skills
            Content:

            Opening a bank account

            Basic labour law (know your rights)

            Basic reading and writing literacy

            Basic numeric literacy

            Life skills are practical abilities and behaviors that help individuals effectively manage everyday tasks and challenges. 
            These skills include communication, decision-making, problem-solving, time management, emotional regulation, financial literacy, and interpersonal skills.
            Life skills are essential for personal development, fostering independence, and building healthy relationships. They equip people to adapt to different situations,
            make informed decisions, and lead productive, fulfilling lives.
            </Text>
            <Link href="/Summary6MonthCourse" style={styles.link}>
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
    },    
    Titel: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        backgroundColor: "lightgrey",
        padding: 5,
        borderRadius: 10,
    },


})