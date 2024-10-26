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
            <Text style={styles.Titel}>Sewing course</Text>
            <Text style={styles.container}>Sewing
            Content:

            Types of stitches            
            Threading a sewing machine
            Sewing buttons, zips, hems and seams
            Alterations
            Designing and sewing new garments
            
            Sewing is the craft of joining fabrics, leather, or other materials using a needle and thread. 
            It can be done by hand or with a sewing machine. Sewing is used to create or repair clothing, household items like curtains or cushions, and other textile-based products.
            It involves various techniques such as stitching, hemming, and finishing, and may also include embellishments like embroidery or appliqué. This skill is essential 
            in both fashion and practical applications, and has been practiced for thousands of years.
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