import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  DrawerNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/FontAwesome";

import Splash from "./screens/Splash";
import Detail from "./screens/Detail";
import Home from "./screens/Main/Home";
import Examples from "./screens/Main/Examples";
import Components from "./screens/Main/Components";

import Loading from "./screens/Main/Components/Loading";

import Alerts from "./screens/Main/Components/Alerts";

import Badges from "./screens/Main/Components/Badges";

import Buttons from "./screens/Main/Components/Buttons";

import Calendars from "./screens/Main/Components/Calendars";
import BasicCalendar from "./screens/Main/Components/Calendars/BasicCalendar";
import AgendaCalendar from "./screens/Main/Components/Calendars/AgendaCalendar";
import CalendarsList from "./screens/Main/Components/Calendars/CalendarsList";
import HorizontalCalendarList from "./screens/Main/Components/Calendars/HorizontalCalendarList";

import Charts from "./screens/Main/Components/Charts";

import Card from "./screens/Main/Components/Card";

import FlatLists from "./screens/Main/Components/FlatLists";
import SingleFlatLists from "./screens/Main/Components/FlatLists/SingleFlatLists";
import MultiFlatLists from "./screens/Main/Components/FlatLists/MultiFlatLists";

import Forms from "./screens/Main/Components/Forms";

import Icons from "./screens/Main/Components/Icons";

import Images from "./screens/Main/Components/Images";

import ListViews from "./screens/Main/Components/ListViews";
import SingleColumn from "./screens/Main/Components/ListViews/SingleColumn";
import GridView from "./screens/Main/Components/ListViews/GridView";

import Maps from "./screens/Main/Components/Maps";

import Menu from "./screens/Main/Components/Menu";

import Modals from "./screens/Main/Components/Modals";

import Navigations from "./screens/Main/Components/Navigations";
import TopNavigation from "./screens/Main/Components/Navigations/TopNavigation";
import Tab1 from "./screens/Main/Components/Navigations/Tab1";
import Tab2 from "./screens/Main/Components/Navigations/Tab2";
import Tab3 from "./screens/Main/Components/Navigations/Tab3";

import BottomNavigation from "./screens/Main/Components/Navigations/BottomNavigation";


import Pickers from "./screens/Main/Components/Pickers";

import Progresss from "./screens/Main/Components/Progress";

import Shares from "./screens/Main/Components/Shares";

import Sliders from "./screens/Main/Components/Slider";

import Swipeable from "./screens/Main/Components/Swipeable";
import SwipeableListview from "./screens/Main/Components/Swipeable/SwipeableListview";
import SwipeableFlatlist from "./screens/Main/Components/Swipeable/SwipeableFlatlist";

import Swiper from "./screens/Main/Components/Swiper";

import Texts from "./screens/Main/Components/Texts";

import WebViews from "./screens/Main/Components/WebViews";




const TAB_ICONS = {
  Home: "home",
  Elements: "star",
  Components: "cog",
  Examples: "th"
};

const MainNavigator = createBottomTabNavigator(
  {
    Home,
    Components,
    Examples
  },
  {
    tabBarOptions: {
      style: {
        paddingVertical: 4
      }
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name={TAB_ICONS[navigation.state.routeName]}
          size={22}
          color={tintColor}
        />
      )
    })
  }
);

const RootNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null
      }
    },
    Main: {
      screen: MainNavigator
    },
    Detail: {
      screen: Detail,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParams("title", "Detail")
      })
    },
    Alerts: {
      screen: Alerts,
      navigationOptions: {
        title: "Alerts"
      }
    },
    Buttons: {
      screen: Buttons,
      navigationOptions: {
        title: "Buttons"
      }
    },
    Images: {
      screen: Images,
      navigationOptions: {
        title: "Images"
      }
    },
    Card: {
      screen: Card,
      navigationOptions: {
        title: "Card"
      }
    },
    Pickers: {
      screen: Pickers,
      navigationOptions: {
        title: "Pickers"
      }
    },
    Forms: {
      screen: Forms,
      navigationOptions: {
        title: "Forms"
      }
    },
    Progress: {
      screen: Progresss,
      navigationOptions: {
        title: "Progress"
      }
    },
    Icons: {
      screen: Icons,
      navigationOptions: {
        title: "Icons"
      }
    },
    Modals: {
      screen: Modals,
      navigationOptions: {
        title: "Modals"
      }
    },
    Texts: {
      screen: Texts,
      navigationOptions: {
        title: "Texts"
      }
    },
    Loading: {
      screen: Loading,
      navigationOptions: {
        title: "Loading"
      }
    },
    Navigations: {
      screen: Navigations,
      navigationOptions: {
        title: "Navigations"
      }
    },
    TopNavigation: {
      screen: TopNavigation,
      navigationOptions: {
        title: "TopNavigation"
      }
    },
    BottomNavigation: {
      screen: BottomNavigation,
      navigationOptions: {
        title: "BottomNavigation"
      }
    },
    Tab1: {
      screen: Tab1,
      navigationOptions: {
        title: "Tab1"
      }
    },

    Tab2: {
      screen: Tab2,
      navigationOptions: {
        title: "Tab2"
      }
    },
    Tab3: {
      screen: Tab3,
      navigationOptions: {
        title: "Tab3"
      }
    },

    Calendars: {
      screen: Calendars,
      navigationOptions: {
        title: "Calendars"
      }
    },
    BasicCalendar: {
      screen: BasicCalendar,
      navigationOptions: {
        title: "Basic Calendar"
      }
    },
    AgendaCalendar: {
      screen: AgendaCalendar,
      navigationOptions: {
        title: "Agenda Calendar"
      }
    },
    CalendarsList: {
      screen: CalendarsList,
      navigationOptions: {
        title: "Calendars List"
      }
    },
    HorizontalCalendarList: {
      screen: HorizontalCalendarList,
      navigationOptions: {
        title: "Horizontal Calendar List"
      }
    },
    Charts: {
      screen: Charts,
      navigationOptions: {
        title: "Charts"
      }
    },
    FlatLists: {
      screen: FlatLists,
      navigationOptions: {
        title: "FlatLists"
      }
    },
    SingleFlatLists: {
      screen: SingleFlatLists,
      navigationOptions: {
        title: "Single FlatLists"
      }
    },
    MultiFlatLists: {
      screen: MultiFlatLists,
      navigationOptions: {
        title: "Multi FlatLists"
      }
    },
    ListViews: {
      screen: ListViews,
      navigationOptions: {
        title: "ListViews"
      }
    },
    SingleColumn: {
      screen: SingleColumn,
      navigationOptions: {
        title: "SingleColumn"
      }
    },
    GridView: {
      screen: GridView,
      navigationOptions: {
        title: "GridView"
      }
    },

    Menu: {
      screen: Menu,
      navigationOptions: {
        title: "Menu"
      }
    },

    Maps: {
      screen: Maps,
      navigationOptions: {
        title: "Maps"
      }
    },
    Shares: {
      screen: Shares,
      navigationOptions: {
        title: "Shares"
      }
    },
    Sliders: {
      screen: Sliders,
      navigationOptions: {
        title: "Sliders"
      }
    },
    Swipeable: {
      screen: Swipeable,
      navigationOptions: {
        title: "Swipeable"
      }
    },
    SwipeableListview: {
      screen: SwipeableListview,
      navigationOptions: {
        title: "Swipeable List View"
      }
    },
    SwipeableFlatlist: {
      screen: SwipeableFlatlist,
      navigationOptions: {
        title: "Swipeable Flat List"
      }
    },
    Swiper: {
      screen: Swiper,
      navigationOptions: {
        title: "Swiper"
      }
    },
    WebViews: {
      screen: WebViews,
      navigationOptions: {
        title: "Web View"
      }
    },
    Badges: {
      screen: Badges,
      navigationOptions: {
        title: "BadgesS"
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const routeName = navigation.state.routeName;
      const routeIndex = navigation.state.index;

      const showHeader =
        routeName !== "Main" || (routeName === "Main" && routeIndex !== 0);

      const navigationOptions = {
        headerStyle: { backgroundColor: "#4285f4" },
        headerTintColor: "#fff"
      };

      if (!showHeader) {
        navigationOptions.header = null;
      }

      if (
        navigation.state.routes &&
        navigation.state.routes.length > routeIndex
      ) {
        navigationOptions.title = navigation.state.routes[routeIndex].routeName;
      }

      return navigationOptions;
    }
  }
);

export default RootNavigator;
