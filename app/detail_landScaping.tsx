import { Text, View, StyleSheet} from "react-native";
import { Link } from 'expo-router';

export default function detail_landScaping() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#793d09",
            }}
        >
            <Text style={styles.Titel}>Land Scaping</Text>
            <Text style={styles.container}>
                Landscaping
                Content:
                Indigenous and exotic plants and trees

                Fixed structures fountains, statues, benches, tables, built-in braai

                Balancing of plants and trees in a garden

                Aesthetics of plant shapes and colours

                Garden layout
                Landscaping is the process of designing, modifying, and maintaining outdoor spaces to enhance their appearance and functionality. 
                It involves arranging elements like plants, trees, flowers, rocks, water features, and structures such as patios or walkways. Landscaping can be decorative, aiming to create aesthetically pleasing environments,
                or functional, addressing drainage, soil erosion, and sustainable practices. It often includes both softscaping (living elements like plants) and hardscaping (non-living elements like stones, pathways, and walls).
                Landscaping is commonly used in residential, 
                commercial, and public spaces to improve the overall ambiance and usability of outdoor areas.                
            </Text>
            <Link href="/Summary6MonthCourse" style={styles.link}>
                <Text  style={styles.linkText}>Summary 6 month course</Text>
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
