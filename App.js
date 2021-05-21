import * as React from "react";
import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const productsList = [
  {
    key: Math.random().toString(),
    id: 1,
    name: "ZINGER",
    price: 460,
    img: "https://i.pinimg.com/originals/60/20/cd/6020cd114517ed543e19b94e30e6d20d.png",
    brand: "KFC",
  },
  {
    key: Math.random().toString(),
    id: 2,
    name: "3 PCS CHICKEN",
    price: 425,
    img: "https://cdn-images-fishry.azureedge.net/product/3-Pcs-Chicken-500x360-089b5c2-kfc.png/xs",
    brand: "KFC",
  },
  {
    key: Math.random().toString(),
    id: 3,
    name: "Pizza Chicken Fajita | S",
    price: 479,
    img: "https://ph-web-bucket.s3.us-east-2.amazonaws.com/data/img/products/images/130-1584448058-Chicken-Fajita.jpg",
    brand: "Pizza Hut",
  },
  {
    key: Math.random().toString(),
    id: 4,
    name: "ZINGERATHA",
    price: 270,
    img: "https://cdn-images-fishry.azureedge.net/product/Zingeratha-500x360-25d9c4f-kfc.png/xs",
    brand: "KFC",
  },
];

const employeesList = [
  {
    key: Math.random().toString(),
    id: 1,
    name: "Hafiz Usman",
    designation: "Developer",
    company: "Facebook",
  },
  {
    key: Math.random().toString(),
    id: 2,
    name: "Usman Najmi",
    designation: "Database Engineer",
    company: "Google",
  },
  {
    key: Math.random().toString(),
    id: 3,
    name: "Saifullah",
    designation: "Manager",
    company: "Amazon",
  },
  {
    key: Math.random().toString(),
    id: 4,
    name: "Urwa",
    designation: "Marketing Head",
    company: "Flutter Google",
  },
];

const ordersList = [
  {
    key: Math.random().toString(),
    orderNo: "MT-01",
    customerName: "Usman",
    customerAddress: "Gujranwala",
    orderDate: "10 May, 2021",
    shippingStatus: "Shiped",
    productName: "ZINGER",
    price: 460,
    brand: "KFC",
  },
  {
    key: Math.random().toString(),
    orderNo: "MT-02",
    customerName: "Saifullah",
    customerAddress: "Sargodha",
    orderDate: "12 May, 2021",
    shippingStatus: "In-Process",
    productName: "3 PCS CHICKEN",
    price: 425,
    brand: "KFC",
  },
  {
    key: Math.random().toString(),
    orderNo: "MT-03",
    customerName: "Najmi",
    customerAddress: "Lahore",
    orderDate: "14 May, 2021",
    shippingStatus: "Shiped",
    productName: "Pizza Chicken Fajita | S",
    price: 479,
    brand: "Pizza Hut",
  },
  {
    key: Math.random().toString(),
    orderNo: "MT-04",
    customerName: "M Fatima",
    customerAddress: "RWP/ISB",
    orderDate: "15 May, 2021",
    shippingStatus: "Shiped",
    productName: "ZINGERATHA",
    price: 270,
    brand: "KFC",
  },
];

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          // headerShown: false,
          headerTitleAlign: "center",
          headerTintColor: "green",
          headerStyle: {
            backgroundColor: "#A4DE02",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={
            {
              // title: "Start Here",
              // headerShown: false,
              // headerTitleAlign: "center",
              // headerTintColor: "white",
              // headerStyle: {
              //   backgroundColor: "blue",
              // },
              // headerRight: () => <Button title="Edit" />,
            }
          }
        />
        <Stack.Screen
          name="Products List"
          component={ProductsListScreen}
          options={
            {
              // title: "Welcome",
              // headerShown: false,
              // headerTitleAlign: "center",
              // headerTintColor: "white",
              // headerStyle: {
              //   backgroundColor: "blue",
              // },
              // headerRight: () => <Button title="Edit" />,
            }
          }
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={({ route }) => ({
            headerTitle: "Detail Scrn " + route.params.name,
          })}
        />
        <Stack.Screen name="Employees List" component={EmployeesListScreen} />
        <Stack.Screen
          name="Employee Details"
          component={EmployeeDetailsScreen}
          options={({ route }) => ({
            headerTitle: "Detail Scrn " + route.params.name,
          })}
        />
        <Stack.Screen name="Orders List" component={OrdersListScreen} />
        <Stack.Screen name="Order Details" component={OrderDetailsScreen} options={({ route }) => ({
            headerTitle: "Detail Scrn " + route.params.orderNo,
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const BigButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={props.onPressEvent}
      style={{
        backgroundColor: "#80C904",
        borderRadius: 50,
        padding: 20,
        margin: 30,
      }}
    >
      <Text style={{ fontSize: 25, color: "white" }}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BigButton
        text="Manage Products"
        onPressEvent={() => navigation.navigate("Products List")}
      />
      <BigButton
        text="Manage Employees"
        onPressEvent={() => navigation.navigate("Employees List")}
      />
      <BigButton
        text="Manage Orders"
        onPressEvent={() => navigation.navigate("Orders List")}
      />
    </View>
  );
};

const ProductsListScreen = ({ navigation }) => {
  const [getList, setList] = useState(productsList);

  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.headerItem}>Name</Text>
        <Text style={styles.headerItem}>Price</Text>
        <Text style={styles.headerItem}>Image</Text>
      </View>
      <ScrollView>
        {getList.map((data) => (
          <View>
            <TouchableOpacity
              style={styles.headerView}
              key={data.key}
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate("Product Details", {
                  id: data.id,
                  name: data.name,
                  price: data.price,
                  img: data.img,
                  brand: data.brand,
                })
              }
            >
              <View style={{ width: "40%" }}>
                <Text>{data.name}</Text>
              </View>
              <View style={{ width: "40%" }}>
                <Text>{data.price}</Text>
              </View>
              <View style={{ width: "50%" }}>
                <Image style={styles.image} source={{ uri: data.img }} />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const ProductDetailsScreen = ({ route }) => {
  return (
    <View>
      <Image style={styles.detailImage} source={{ uri: route.params.img }} />
      <Text style={[styles.detailText, { color: "green", alignSelf: 'center' }]}>
          Order Details
        </Text>
      <View style={styles.rowDetail}>
        <Text style={styles.detailText}>Product ID: {route.params.id}</Text>
        <Text style={styles.detailText}>Product Name: {route.params.name}</Text>
      </View>

      <View style={styles.rowDetail}>
        <Text style={styles.detailText}>
          Product Price: {route.params.price}
        </Text>
        <Text style={styles.detailText}>
          Product Brand: {route.params.brand}
        </Text>
      </View>
    </View>
  );
};

const EmployeesListScreen = ({ navigation }) => {
  const [getList, setList] = useState(employeesList);

  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.headerItem}>Name</Text>
        <Text style={styles.headerItem}>Designation</Text>
      </View>
      <ScrollView>
        {getList.map((data) => (
          <View>
            <TouchableOpacity
              style={styles.headerView}
              key={data.key}
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate("Employee Details", {
                  id: data.id,
                  name: data.name,
                  designation: data.designation,
                  company: data.company,
                })
              }
            >
              <Text>{data.name}</Text>
              <Text>{data.designation}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const EmployeeDetailsScreen = ({ route }) => {
  return (
    <View>
      
    <View style={{ alignSelf: "center", margin: 5 }}>
    <Text style={[styles.detailText, { color: "green", alignSelf: 'center' }]}>
          Employee Information
        </Text>

        <Text style={styles.detailText}>Employee ID: {route.params.id}</Text>
        <Text style={styles.detailText}>
          Employee Name: {route.params.name}
        </Text>
        <Text style={styles.detailText}>
          Employee Designation: {route.params.designation}
        </Text>
        <Text style={styles.detailText}>
          Company Name: {route.params.company}
        </Text>
      </View>
    </View>
  );
};

const OrdersListScreen = ({ navigation }) => {
  const [getList, setList] = useState(ordersList);

  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.headerItem}>Order Number</Text>
        <Text style={styles.headerItem}>Product Name</Text>
        <Text style={styles.headerItem}>Price</Text>
      </View>
      <ScrollView>
        {getList.map((data) => (
          <View>
            <TouchableOpacity
              style={styles.headerView}
              key={data.key}
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate("Order Details", {
                  orderNo: data.orderNo,
                  customerName: data.customerName,
                  customerAddress: data.customerAddress,
                  orderDate: data.orderDate,
                  shippingStatus: data.shippingStatus,
                  productName: data.productName,
                  price: data.price,
                  brand: data.brand,
                })
              }
            >
              <Text>{data.orderNo}</Text>

              <Text>{data.productName}</Text>
              <Text>{data.price}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const OrderDetailsScreen = ({ route }) => {
  return (
    <View>
      <View style={{ alignSelf: "center" }}>
        <Text style={[styles.detailText, { color: "green" }]}>
          Customer Information
        </Text>

        <Text style={styles.detailText}>
          Customer Name: {route.params.customerName}
        </Text>
        <Text style={styles.detailText}>
          Customer Address: {route.params.customerAddress}
        </Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <Text style={[styles.detailText, { color: "green" }]}>
          Order Detail
        </Text>

        <Text style={styles.detailText}>
          Order Date: {route.params.orderDate}
        </Text>
        <Text style={styles.detailText}>
          Shipping Status: {route.params.shippingStatus}
        </Text>
        <Text style={styles.detailText}>
          Order Number: {route.params.orderNo}
        </Text>
        <Text style={styles.detailText}>
          Product Name: {route.params.productName}
        </Text>
      </View>

      <View style={styles.rowDetail}>
        <Text style={styles.detailText}>
          Product Price: {route.params.price}
        </Text>
        <Text style={styles.detailText}>
          Product Brand: {route.params.brand}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
    margin: 2,
  },
  headerItem: {
    fontWeight: "bold",
  },
  image: { width: 80, height: 70 },
  detailImage: {
    width: "100%",
    height: 300,
  },
  rowDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  detailText: {
    fontWeight: "bold",
    padding: 10,
  },
});

export default App;
