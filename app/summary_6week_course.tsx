import { Pressable, Text, View, StyleSheet,Image } from "react-native";
import { Link } from 'expo-router';

export default function summary_6week_course() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#793d09",                
            }}            
        >  <Image source={require('../assets/images/logo.png')} style={{ width: 150, height: 150 }} />
          <View style={styles.container2}>
            <Text style={styles.Titel}>Summary 6 week course</Text>

            <Text style={styles.course}>
            Child Minding
            Fees: R750
            Purpose: To provide basic child and baby care
            </Text>
            <Link href="/detail_childMinding" style={styles.details}>
                <Text>Details</Text>
            </Link>
                       

            <Text style={styles.course}>
            Cooking
            Fees: R750
            Purpose: To prepare and cook nutritious family meals
            </Text>
            <Link href="/detail_cooking" style={styles.details}>              
                <Text>Details</Text>
            </Link>
            

            <Text style={styles.course}>
            Gardening
            Fees: R750
            Purpose: To provide gardening services for new and established gardens
            </Text>
            <Link href="/detail_gardenMaintenace" style={styles.details}>
                <Text>Details</Text>
            </Link> 
        </View>


            <View style={styles.container1}>    
            <Link href="/Summary6MonthCourse" style={styles.link}>
                <Text style={styles.linkText}>Summary 6 month course</Text>
            </Link>
            
            <Link href="/calculate" style={styles.link}>
                <Text style={styles.linkText}>
                 Get a quote for course
                </Text>
            </Link>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    Titel: {
        fontSize: 20,
        fontWeight: "bold",
    },
    course: {
        fontSize: 20,
        
        backgroundColor: "lightgrey",
        
    },
    details: {
        fontSize: 18,
        borderBlockColor: "black",
        borderWidth: 2,
        backgroundColor: "lightgrey",
        padding: 5,
        margin: 5,
        borderRadius: 10,
    },
    link: {
        marginVertical: 10,
    },
    linkText: {
        color: '#cf8929',
        textDecorationLine: 'underline',
        fontSize: 24,
    },
    container1: {
    
        justifyContent: "center",
        alignItems: "center",    
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "lightgrey",
        padding: 10,
        borderRadius: 10,
    },
    container2: {
    
        justifyContent: "center",
        alignItems: "center",    
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "lightgrey",
        padding: 10,
        borderRadius: 10,
    },
})