import { Text, View, StyleSheet, ScrollView,Image } from "react-native";
import { Link } from 'expo-router';



export default function Index() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={{ width: 200, height: 200 }} />
      <Text style={styles.description}>
        Empowering the Nation was established in 2018 and offers courses in Johannesburg. Hundreds of domestic workers and
        gardeners have been trained on both the six-month long Learnerships and six-week Short Skills Training 
        Programmes to empower themselves and provide more marketable skills.
      </Text>
      <View style={styles.container1}>

      <Link href="/summary_6week_course" style={styles.link}>
        <Text style={styles.linkText}>Summary 6 week course</Text>
      </Link>

      <Link href="/Summary6MonthCourse" style={styles.link}>
        <Text style={styles.linkText}>Summary 6 month course</Text>
      </Link>

      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#793d09",
    
  },
  description: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "lightgrey",
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
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
});


