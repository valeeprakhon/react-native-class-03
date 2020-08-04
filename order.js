//Order.js
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Order extends Component {

  render(props) {
    return (
      <View style={styles.containerStyle}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image style={styles.icon} source={{ uri:"https://sv1.picz.in.th/images/2020/08/02/E9qb0Z.th.png" }} />
        </View>
        <View style={{ flex: 3, flexDirection: 'column', marginLeft: 6 }}>
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>
              {"Food Name"}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={{ fontSize: 15 }}>Quantity</Text>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
              />

              <Text style={{ fontSize: 15 }}>Price</Text>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
              />
            </View>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  0.0
                </Text>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: '#2196F3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{ fontSize: 15, color: 'white' }}>Sum</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#DDDDDD',
    margin: 6,
    padding: 10,
  },
  icon: {
    height: 70,
    width: 70,
    borderRadius: 35,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    marginEnd: 10,
    fontSize: 20,
  },
});
