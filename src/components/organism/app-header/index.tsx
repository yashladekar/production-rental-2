// 'use client';

// import React, { useState } from "react";
// import Image from "next/image";
// import {
//     Box,
//     IconButton,
//     Menu,
//     MenuItem,
//     Toolbar,
//     Typography,
// } from "@mui/material";
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
// import { styled, useTheme } from "@mui/material/styles";

// import { MENU_ICON, PROFILE_ICON } from "@/components/atoms/icons/config";
// // import { useGlobalContext } from "@/context/ContextProvider";
// import getIcon from "@/components/atoms/icons/index";
// // import getUserInfo from "@/utilities/Auth/getUserInfo";

// import "./style.css"; // Keep if this contains global resets

// const drawerWidth = 250;
// const logo = "/jlr-logo.png";

// // ----------------------------------------------------------------------
// // Styled AppBar (Handles the animated drawer shift)
// // ----------------------------------------------------------------------
// interface AppBarProps extends MuiAppBarProps {
//     open?: boolean;
// }

// interface AppHeaderProps {
//     open: boolean;
//     onDrawerOpen: () => void;
// }
// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== "open",
// })<AppBarProps>(({ theme, open }) => ({
//     position: "fixed",
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(["width", "margin"], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));

// // ----------------------------------------------------------------------
// // Main Header Component
// // ----------------------------------------------------------------------
// const AppHeader = ({ open, onDrawerOpen }: AppHeaderProps) => {
//     const theme = useTheme();
//     // const userInfo = getUserInfo();

//     // const {
//     //     miniMenuClose,
//     //     setMiniMenuClose,
//     //     open,
//     //     setOpen,
//     //     mode,
//     //     miniMenuColor,
//     // } = useGlobalContext()!;

//     const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

//     const handleAnchorEl = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorEl(anchorEl ? null : event.currentTarget);
//     };

//     // const handleDrawerOpen = () => {
//     //     if (miniMenuClose) setMiniMenuClose?.(false);
//     //     setOpen?.(true);
//     // };

//     // const handleLogout = () => {
//     //     window.location.href = process.env.NEXT_PUBLIC_LOGOUT_URL || '/';
//     // };

//     return (
//         <AppBar
//             position="fixed"
//             // open={open}
//             className="app-header"
//             sx={{
//                 backgroundColor: "secondary.main",
//                 color: "text.secondary",
//             }}
//         >
//             <Toolbar>
//                 {/* Hamburger Menu Icon */}
//                 {/* <IconButton
//                     color="inherit"
//                     aria-label="open drawer"
//                     // onClick={handleDrawerOpen}
//                     edge="start"
//                     sx={{
//                         mr: 2.25, // roughly 18px
//                         p: 0.75, // roughly 6px
//                         // ...(open && { display: "none" }),
//                     }}
//                 >
//                     {getIcon(MENU_ICON, { fontSize: "24px" })}
//                 </IconButton> */}

//                 <IconButton
//                     color="inherit"
//                     aria-label="open drawer"
//                     onClick={onDrawerOpen} // <-- Hooked up here
//                     edge="start"
//                     sx={{
//                         mr: 2.25,
//                         p: 0.75,
//                         ...(open && { display: "none" }), // Hides when sidebar is open
//                     }}
//                 >
//                     {getIcon(MENU_ICON, { fontSize: "24px" })}
//                 </IconButton>
//                 {/* Logo */}
//                 <Image
//                     src={logo}
//                     alt="Logo"
//                     width={25}
//                     height={25}
//                     style={{
//                         marginRight: 15,
//                         // marginLeft: open ? 0 : miniMenuColor ? 18 : 0,
//                         verticalAlign: "middle",
//                     }}
//                 />

//                 {/* App Title */}
//                 <Typography
//                     variant="h6"
//                     noWrap
//                     component="div"
//                     sx={{
//                         pl: "15px",
//                         alignSelf: "center",
//                         color: "text.secondary",
//                     }}
//                 >
//                     {process.env.NEXT_PUBLIC_APPLICATION_NAME}
//                 </Typography>

//                 {/* Spacer to push profile to the right */}
//                 <Box sx={{ flexGrow: 1 }} />

//                 {/* Profile Menu Wrapper */}
//                 <Box
//                     className="profile-menu"
//                     sx={{
//                         borderRadius: "2px",
//                         p: "0.5px",
//                         display: "flex",
//                         alignItems: "center",
//                         ml: "6px",
//                         color: "text.secondary",
//                     }}
//                 >
//                     <IconButton
//                         edge="end"
//                         aria-label="account of current user"
//                         aria-controls="profile-menu"
//                         aria-haspopup="true"
//                         onClick={handleAnchorEl}
//                         color="inherit"
//                         sx={{ borderRadius: 0, width: "100%", py: 0.5 }}
//                     >
//                         {getIcon(PROFILE_ICON, {
//                             fontSize: 24,
//                             color: theme?.palette?.text?.secondary,
//                         })}

//                         <Box sx={{ ml: "5px", textAlign: "left" }}>
//                             <Typography
//                                 variant="h6"
//                                 noWrap
//                                 sx={{
//                                     mr: "10px",
//                                     fontSize: "12px",
//                                     lineHeight: 1.2,
//                                     color: "text.secondary",
//                                 }}
//                             >
//                                 {/* {userInfo?.given_name || "User"} */}
//                                 user
//                             </Typography>

//                             <Typography
//                                 variant="body2"
//                                 noWrap
//                                 sx={{
//                                     fontSize: "10px",
//                                     lineHeight: 1.2,
//                                     color: "text.secondary",
//                                 }}
//                             >
//                                 {/* {userInfo?.cdsid || ""} */}
//                                 ""
//                             </Typography>
//                         </Box>
//                     </IconButton>

//                     {/* Dropdown Menu */}
//                     <Menu
//                         id="profile-menu"
//                         anchorEl={anchorEl}
//                         open={Boolean(anchorEl)}
//                         onClose={handleAnchorEl}
//                         sx={{
//                             "& .MuiMenu-paper": {
//                                 backgroundColor: "secondary.main",
//                                 width: "140px",
//                             },
//                         }}
//                     >
//                         <MenuItem
//                             // onClick={handleLogout}
//                             sx={{
//                                 // backgroundColor: mode === "dark" ? "#C4C4C4" : "rgba(255,255,255,0.1)",
//                                 color: "text.secondary",
//                                 "&:hover": {
//                                     // backgroundColor: mode === "dark" ? "#b0b0b0" : "rgba(255,255,255,0.2)",
//                                 }
//                             }}
//                         >
//                             Logout
//                         </MenuItem>
//                     </Menu>
//                 </Box>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default AppHeader;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    Box,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    AppBar, // Import the standard AppBar
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { MENU_ICON, PROFILE_ICON } from "@/components/atoms/icons/config";
import getIcon from "@/components/atoms/icons/index";
// import getUserInfo from "@/utilities/Auth/getUserInfo";

import "./style.css";
import { userInfo } from "node:os";

// Export this width so the Sidebar and Main layout can sync with it perfectly
export const drawerWidth = 250;
const logo = "/jlr-logo.png";

interface AppHeaderProps {
    open: boolean;
    onDrawerOpen: () => void;
}

const AppHeader = ({ open, onDrawerOpen }: AppHeaderProps) => {
    const theme = useTheme();
    // const userInfo = getUserInfo();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleAnchorEl = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleLogout = () => {
        window.location.href = process.env.NEXT_PUBLIC_LOGOUT_URL || "/";
    };

    return (
        <AppBar
            position="fixed"
            className="app-header"
            sx={{
                backgroundColor: "secondary.main",
                color: "text.secondary",
                zIndex: theme.zIndex.drawer + 1, // Keeps header on top
                transition: theme.transitions.create(["width", "margin"], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                // When Sidebar is Open: Shrink the header and move it to the right
                ...(open && {
                    marginLeft: `${drawerWidth}px`,
                    width: `calc(100% - ${drawerWidth}px)`,
                    transition: theme.transitions.create(["width", "margin"], {
                        easing: theme.transitions.easing.easeOut,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                }),
            }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onDrawerOpen}
                    edge="start"
                    sx={{
                        mr: 2.25,
                        p: 0.75,
                        ...(open && { display: "none" }), // Hides hamburger when open
                    }}>
                    {getIcon(MENU_ICON, { fontSize: "24px" })}
                </IconButton>

                <Image
                    src={logo}
                    alt="Logo"
                    width={25}
                    height={25}
                    style={{ marginRight: 15, verticalAlign: "middle" }}
                />

                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ pl: "15px", alignSelf: "center" }}>
                    {process.env.NEXT_PUBLIC_APPLICATION_NAME}
                </Typography>

                <Box sx={{ flexGrow: 1 }} />

                <Box
                    className="profile-menu"
                    sx={{
                        // border: "0.5px solid white",
                        borderRadius: "2px",
                        p: "0.5px",
                        display: "flex",
                        alignItems: "center",
                        ml: "6px",
                    }}>
                    <IconButton
                        edge="end"
                        onClick={handleAnchorEl}
                        color="inherit"
                        sx={{ borderRadius: 0, width: "100%", py: 0.5 }}>
                        {getIcon(PROFILE_ICON, {
                            fontSize: 24,
                            color: theme?.palette?.text?.secondary,
                        })}
                        <Box sx={{ ml: "5px", textAlign: "left" }}>
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{ mr: "10px", fontSize: "12px", lineHeight: 1.2 }}>
                                {/* {userInfo?.given_name || "User"} */}
                                user
                            </Typography>
                            <Typography
                                variant="body2"
                                noWrap
                                sx={{ fontSize: "10px", lineHeight: 1.2 }}>
                                {/* {userInfo?.cdsid || ""} */}
                                ""
                            </Typography>
                        </Box>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleAnchorEl}
                        sx={{
                            "& .MuiMenu-paper": {
                                backgroundColor: "secondary.main",
                                width: "140px",
                            },
                        }}>
                        <MenuItem onClick={handleLogout} sx={{ color: "text.secondary" }}>
                            Logout
                        </MenuItem>
                    </Menu>
                </Box>
                {/* ----------------------------------------------------------- */}
            </Toolbar>
        </AppBar>
    );
};

export default AppHeader;
