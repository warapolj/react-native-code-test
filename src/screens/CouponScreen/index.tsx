import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CouponList from './CouponList';
import {SceneMap, TabView} from 'react-native-tab-view';
import {Row} from '../../components/Row';

const renderScene = SceneMap({
  all: () => <CouponList />,
  coupon: () => <></>,
  voucher: () => <></>,
});

function CouponScreen() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'all', title: 'ทั้งหมด'},
    {key: 'coupon', title: 'คูปองส่วนลด'},
    {key: 'voucher', title: 'คูปองวอยเชอร์'},
  ]);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => {
          return (
            <Row>
              {props.navigationState.routes.map((route, index) => {
                const isActive = props.navigationState.index === index;
                return (
                  <TouchableOpacity
                    onPress={() => props.jumpTo(route.key)}
                    style={{padding: 10, width: `${100 / routes.length}%`}}>
                    <Text
                      style={{
                        ...styles.tabBarLabel,
                        color: isActive ? '#3F78E1' : 'gray',
                      }}>
                      {route.title}
                    </Text>
                    <View
                      style={{
                        ...styles.tabBarIndicator,
                        backgroundColor: isActive ? '#3F78E1' : 'transparent',
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
            </Row>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5FB',
  },
  tabBarIndicator: {
    height: 2,
    marginTop: 10,
    width: 100,
    alignSelf: 'center',
  },
  tabBarLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default CouponScreen;
