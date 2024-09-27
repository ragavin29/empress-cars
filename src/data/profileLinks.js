import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/AntDesign';
export const profileLinks = {
  accountDetails: {
    label: "Account Details",
    icon: (props) => <Icon name="account-circle" {...props} />,
    color: "#FFD700", 
    icons: (props) => <Icons name="right" {...props} />,
    route: "AccountDetails",
  },
  concierge: {
    label: "Concierge",
    icon: (props) => <Icon name="thumb-up" {...props} />,
    color: "#FFD700",
    icons: (props) => <Icons name="right" {...props} />,
    route: "Concierge", 
  },
  bookings: {
    label: "Bookings",
    icon: (props) => <Icon name="book-open-variant" {...props} />,
    color: "#FFD700",
    icons: (props) => <Icons name="right" {...props} />,
    route: "Bookings", 
  },
  settings: {
    label: "Settings",
    icon: (props) => <Icon name="cog" {...props} />,
    color: "#FFD700",
    icons: (props) => <Icons name="right" {...props} />,
    route: "Settings", 
  },
  myServices: {
    label: "My services",
    icon: (props) => <Icon name="briefcase" {...props} />,
    color: "#FFD700",
    icons: (props) => <Icons name="right" {...props} />,
    route: "MyServices",
  },
  myFavourites: {
    label: "My Favourites",
    icon: (props) => <Icon name="star" {...props} />,
    color: "#FFD700",
    icons: (props) => <Icons name="right" {...props} />,
    route: "MyFavourites", 
  },
  logout: {
    label: "Logout",
    icon: (props) => <Icon name="logout" {...props} />,
    color: "red",
    icons: (props) => <Icons name="right" {...props} />,
    route: "Logout", 
  }, 
};