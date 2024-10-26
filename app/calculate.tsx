
import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet,  } from 'react-native';
import { Link } from 'expo-router';

const courses = [
  { id: '1', name: 'Child Minding', price: 750 },
  { id: '2', name: 'Cooking', price: 750 },
  { id: '3', name: 'Gardening', price: 750 },
  { id: '4', name: 'First Aid', price: 1500 },
  { id: '5', name: 'Sewing', price: 1500 },
  { id: '6', name: 'Landscaping', price: 1500 },
  { id: '7', name: 'Life Skills', price: 1500 },
];

const App = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const toggleCourseSelection = (courseId: string) => {
    setSelectedCourses((prevSelected) => {
      if (prevSelected.includes(courseId)) {
        return prevSelected.filter((id) => id !== courseId);
      } else {
        return [...prevSelected, courseId];
      }
    });
  };

  const calculateTotalPrice = () => {
    return selectedCourses.reduce((total, id) => {
      const course = courses.find((c) => c.id === id);
      return total + (course?.price || 0);
    }, 0);
  };

  const calculateDiscount = () => {
    const selectedCount = selectedCourses.length;
    if (selectedCount === 2) {
      return 'Discount Applied: 5%';
    }
    if (selectedCount === 3) {
      return 'Discount Applied: 10%';
    }
    if (selectedCount > 3) {
      return 'Discount Applied: 15%';
    }
    return 'No Discount';
  };

  const calculateTotalPriceWithDiscount = () => {
    const totalPrice = calculateTotalPrice();
    const discount = calculateDiscount();
    if (discount === 'Discount Applied: 5%') {
      return totalPrice * 0.8;
    }
    if (discount === 'Discount Applied: 10%') {
      return totalPrice * 0.9;
    }
    if (discount === 'Discount Applied: 15%') {
      return totalPrice * 0.85;
    }
    return totalPrice;
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.title}>Select Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseContainer}>
            <Text>{item.name}{' - R'}{item.price}</Text>
            <Button
              title={selectedCourses.includes(item.id) ? 'Deselect' : 'Select'}
              onPress={() => toggleCourseSelection(item.id)}
            />
          </View>
        )}
      />
      <Text style={styles.discountText}>{calculateDiscount()}</Text>
      <Text>Total Price: {calculateTotalPrice()}</Text>
      <Text>Total Price with Discount: {calculateTotalPriceWithDiscount()}</Text>

      <Link href="/home" style={styles.linkText}>Home</Link>
      <Link href="/summary_6week_course" style={styles.linkText}>Summary 6 week course</Link>
      <Link href="/Summary6MonthCourse" style={styles.linkText}>Summary 6 month course</Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,    
    justifyContent: "center",
    alignItems: "center",    
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#793d09",
    
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  courseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  discountText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  container1: {
    backgroundColor: "lightgrey",
    padding: 10,
    margin: 10,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 10,
  },
  linkText: {
    color: '#cf8929',
    textDecorationLine: 'underline',
    fontSize: 20,
}, 

});

export default App;