'use client';

import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import AppHeader from './app-header';
import Sidebar from './sidebar';
import MainContainer from '../molecules/main-container';

export default function ProtectedShell({ children }: { children: React.ReactNode }) {
    // Manage the sidebar state globally for the protected layout
    const [open, setOpen] = useState(false);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppHeader open={open} onDrawerOpen={() => setOpen(true)} />
            <Sidebar open={open} onDrawerClose={() => setOpen(false)} />
            <MainContainer open={open}>
                {children}
            </MainContainer>
        </Box>
    );
}
