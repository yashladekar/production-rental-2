'use client';

import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import BreadcrumbsMain from '../atoms/breadcrumb-main';
import { drawerWidth, DrawerHeader } from '../organism/sidebar'; // Import constants from Sidebar

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    minHeight: "100vh",
    width: "100%", // Ensures it doesn't overflow
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface MainContainerProps {
    children: ReactNode;
    open: boolean;
}

export default function MainContainer({ children, open }: MainContainerProps) {
    return (
        <Main open={open}>
            {/* The DrawerHeader acts as a spacer to push content below the fixed AppBar */}
            <DrawerHeader />
            <BreadcrumbsMain />
            {children}
        </Main>
    );
}