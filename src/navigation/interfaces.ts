import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  HomeScreen?: undefined;
  CouponScreen?: undefined;
};

export type NavigationProps = NavigationProp<RootStackParamList>;
