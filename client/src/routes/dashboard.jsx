// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
//added
import SignUp from 'views/SignUp/SignUp'
import SignIn from 'views/SignIn/SignIn'
import EmailVerification from 'views/EmailVerification/EmailVerification'
import Poll from 'views/Poll/Poll'


const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/signup",
    sidebarName: "Sign up",
    navbarName: "Sign up",
    icon: Person,
    component: SignUp
  },
  {
    path: "/signin",
    sidebarName: "Sign in",
    navbarName: "Sign in",
    icon: Person,
    component: SignIn
  },
  {
    path: "/emailverification",
    sidebarName: "verification",
    navbarName: "verification",
    icon: Person,
    component: EmailVerification
  },
  {
    path: "/poll",
    sidebarName: "poll",
    navbarName: "poll",
    icon: Person,
    component: Poll
  },
  { redirect: true, path: "/", to: "/signin", navbarName: "Redirect" }
];

export default dashboardRoutes;
