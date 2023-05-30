import { iNavListItem } from "../interfaces/NavigationInterface";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import * as MUIICON from "@mui/icons-material";

export const drawerWidth: number = 240;

export const mainListItemsArray: iNavListItem[] = [
  {
    index: 1,
    title: "Dashboard",
    icon: <DashboardIcon />,
    url: "",
    isSubHeader: false,
  },
  {
    index: 2,
    title: "Orders",
    icon: <ShoppingCartIcon />,
    url: "",
    isSubHeader: false,
  },
  {
    index: 3,
    title: "Customers",
    icon: <PeopleIcon />,
    url: "",
    isSubHeader: false,
  },
  {
    index: 4,
    title: "Reports",
    icon: <BarChartIcon />,
    url: "",
    isSubHeader: false,
  },
  {
    index: 5,
    title: "Integrations",
    icon: <LayersIcon />,
    url: "",
    isSubHeader: false,
  },
];

export const secondaryListItemsArray: iNavListItem[] = [
  {
    index: 1,
    title: "Save Reports",
    url: "",
    isSubHeader: true,
    icon: "",
  },
  {
    index: 2,
    title: "Current month",
    url: "",
    isSubHeader: false,
    icon: <AssignmentIcon />,
  },
  {
    index: 3,
    title: "Last quarter",
    url: "",
    isSubHeader: false,
    icon: <AssignmentIcon />,
  },
  {
    index: 4,
    title: "Year-end sale",
    url: "",
    isSubHeader: false,
    icon: <AssignmentIcon />,
  },
];

export const APIS = {
  CUSTOMERS: "/api/customers",
};

export function setCookie(name: string, value: string, days: number = 1): void {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
}

export function getCookie(name: string): string | undefined {
  const cookieValue: RegExpMatchArray | null = document.cookie.match(
    `(^|;)\\s*${name}\\s*=\\s*([^;]+)`
  );
  return cookieValue ? cookieValue.pop() : undefined;
}

export const modalType = {
  AddEditPost: "AddPost",
  EditPost: "EditPost",
};

export const progressStatus = {
  toLoad: "toLoad",
  loading: "loading",
  loaded: "loaded",
};

export const defaultModalData = {
  open: false,
  type: "",
  data: null,
};
