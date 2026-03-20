import AccountCircle from "@mui/icons-material/AccountCircle";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import FilterListIcon from "@mui/icons-material/FilterList";
import { StandardCSSProperties } from "@mui/system";
import { useTheme } from "@mui/material/styles"; // Import useTheme for dynamic theming
import {
    CHEVRON_LEFT_ICON,
    CHEVRON_RIGHT_ICON,
    DASHBOARD_ICON,
    MENU_ICON,
    MINI_MENU_ICON,
    PROFILE_ICON,
    SETTINGS_ICON,
    HELP_ICON,
    GENERIC_FORM_ICON,
    CUSTOM_DATA_GRID,
    USER_MANAGEMENT_ICON,
    ROLE_MANAGEMENT_ICON,
    INFO_ICON,
    CROSS_ICON,
    FILTER_ICON,
    ADD_ICON,
    BULLET_ICON,
    DELETE_ICON,
    SORT_ICON,
    RESET_ICON,
    ARROW_UPWARD_ICON,
    ARROW_DOWNWARD_ICON,
    FILTER_RESET_ICON,
    LOAN_MANAGEMENT_ICON,
    MCP_ALLOCATION_ICON,
    MCP_ORDER_ICON,
    ADMIN_ICON,
    CURRENCY_POUND_ICON,
    MANAGE_LATE_ORDER_ICON

} from "./config";
import HelpSharpIcon from "@mui/icons-material/HelpSharp";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import DeleteIcon from "@mui/icons-material/Delete";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import RefreshIcon from "@mui/icons-material/Refresh";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import LoanManagementIcon from "@mui/icons-material/Upload";
import AdminSvgIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import MCPAllocationIcon from "@mui/icons-material/BarChart";
import MCPOrderIcon from "@mui/icons-material/Inventory2Outlined";
import DashboardIcon from "@mui/icons-material/SpaceDashboardOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import ManageLateOrderIcon from '@mui/icons-material/AssignmentLate';

type iconProps = StandardCSSProperties;

const GetIcon = (
    menuItemName: string,
    props?: iconProps,
    styleClass?: string
) => {
    const theme = useTheme(); // Access the current theme
    const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#424242"; // White for dark mode, grey for light mode

    switch (menuItemName) {
        case DASHBOARD_ICON:
            return <DashboardIcon sx={{ ...props, color: iconColor }} className={styleClass} />;
        case GENERIC_FORM_ICON:
            return <BorderColorOutlinedIcon sx={{ ...props, color: iconColor }} />;
        case CUSTOM_DATA_GRID:
            return <DriveFileRenameOutlineOutlinedIcon sx={{ ...props, color: iconColor }} />;
        case USER_MANAGEMENT_ICON:
            return <AccountCircleOutlinedIcon sx={{ ...props, color: iconColor }} />;
        case ROLE_MANAGEMENT_ICON:
            return <BadgeOutlinedIcon sx={{ ...props, color: iconColor }} />;
        case MENU_ICON:
            return <MenuIcon sx={{ ...props, color: iconColor }} />;
        case CHEVRON_RIGHT_ICON:
            return <ChevronRight sx={{ ...props, color: iconColor }} />;
        case CHEVRON_LEFT_ICON:
            return <ChevronLeft sx={{ ...props, color: iconColor }} />;
        case PROFILE_ICON:
            return <AccountCircle sx={{ ...props, color: iconColor }} />;
        case MINI_MENU_ICON:
            return <RadioButtonCheckedOutlinedIcon sx={{ color: props?.color }} />;
        case HELP_ICON:
            return <HelpSharpIcon sx={{ ...props, color: iconColor }} />;
        case INFO_ICON:
            return <InfoIcon sx={{ ...props, color: iconColor }} />;
        case CROSS_ICON:
            return <CloseIcon sx={{ ...props, color: iconColor }} />;
        case FILTER_ICON:
            return <FilterListIcon sx={{ ...props, color: iconColor }} />;
        case ADD_ICON:
            return <AddIcon sx={{ ...props, color: iconColor }} className={styleClass} />;
        case BULLET_ICON:
            return <CircleIcon sx={{ ...props, color: iconColor }} />;
        case DELETE_ICON:
            return <DeleteIcon sx={{ ...props, color: iconColor }} className={styleClass} />;
        case SORT_ICON:
            return <SwapVertIcon sx={{ ...props, color: iconColor }} className={styleClass} />;
        case FILTER_RESET_ICON:
            return <FilterListOffIcon sx={{ ...props, color: iconColor }} className={styleClass} />;
        case RESET_ICON:
            return <RefreshIcon sx={{ ...props, color: iconColor }} className={styleClass} />;
        case ARROW_UPWARD_ICON:
            return <KeyboardDoubleArrowUpIcon sx={{ ...props, color: iconColor }} className={styleClass} />;
        case ARROW_DOWNWARD_ICON:
            return <KeyboardDoubleArrowDownIcon sx={{ ...props, color: iconColor }} className={styleClass} />;
        case LOAN_MANAGEMENT_ICON:
            return <LoanManagementIcon sx={{ ...props, color: iconColor }} className={styleClass} />;
        case MCP_ALLOCATION_ICON:
            return <MCPAllocationIcon sx={{ ...props, color: iconColor }} className={styleClass} />;
        case MCP_ORDER_ICON:
            return <MCPOrderIcon sx={{ ...props, color: iconColor }} className={styleClass} />;
        case ADMIN_ICON:
            return <AdminSvgIcon sx={{ ...props, color: iconColor }} className={styleClass} />;
        case SETTINGS_ICON:
            return <SettingsIcon sx={{ ...props, color: iconColor }} className={styleClass} />;
        case CURRENCY_POUND_ICON:
            return <CurrencyPoundIcon sx={{ ...props, color: iconColor }} className={styleClass} />;
        case MANAGE_LATE_ORDER_ICON:
            return <ManageLateOrderIcon sx={{ ...props, color: iconColor }} className={styleClass} />;
        default:
            return null;
    }
};

export default GetIcon;