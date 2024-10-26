import { Pressable, Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { Href, Link } from 'expo-router';

export default function Summary6MonthCourse() {  
    return (
        <ScrollView>
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#793d09",
            }}
        >
            <Image source={require('../assets/images/logo.png')} style={{ width: 150, height: 150 }} />
            <Text style={styles.Titel}>These are the following courses:</Text>
            <Text style={styles.Titel}>Summary 6 month course</Text>

            <CourseCard
                title="First Aid"
                description="Provides first aid awareness and basic life support"
                price={1500}
                detailsLink="/detail_firstAid"
            />

            <CourseCard
                title="Sewing"
                description="Provides alterations and new garment tailoring services"
                price={1500}
                detailsLink="/detail_sewing"
            />

            <CourseCard
                title="Landscaping"
                description="Provides landscaping services for new and established gardens"
                price={1500}
                detailsLink="/detail_landScaping"
            />

            <CourseCard
                title="Life Skills"
                description="Provides skills to navigate basic life necessities"
                price={1500}
                detailsLink="/detail_lifeSkills"
            />
            <View style={styles.container1}>
            <Link href="/home" style={styles.linkText}>Home</Link>
            <Link href="/summary_6week_course" style={styles.linkText}>Summary 6 week course</Link>
            <Link href="/calculate" style={styles.linkText}>Get a quote for course</Link>
            </View>
        </View>
        </ScrollView>
    );
}

function CourseCard(props: {
    title: string;
    description: string;
    price: number;
    detailsLink: string;
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.course}>{props.title}</Text>
            <Text style={styles.course}>{props.description}</Text>
            <Text style={styles.course} >Fees: {props.price}</Text>
            <Link href={props.detailsLink as Href<string | object>}>
             <Text style={styles.linkText}>Details</Text>
           </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    Titel: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        backgroundColor: "lightgrey",
        padding: 5,
        borderRadius: 10,
    },
    course: {
        fontSize: 20,
        marginBottom: 5,
    },
    details: {
        color: "blue",
        textDecorationLine: "underline",
    },
    container: {
        backgroundColor: "lightgrey",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "black",
    },
    linkText: {
        color: '#cf8929',
        textDecorationLine: 'underline',
        fontSize: 18,
    },
    container1: {
        backgroundColor: "lightgrey",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "black",
        
    }
});
