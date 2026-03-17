"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import "./style.css";
const logo = "/JLR_logo_2023.png";

// Styled components
const Container = styled(Box)(({ }) => ({
    display: "flex",
    height: "100vh",
    flexDirection: "column",
}));

const MainSection = styled(Box)(() => ({
    display: "flex",
    flex: 1,
}));

const TopSection = styled(Box)(({ theme }) => ({
    flex: "1 1 33.33%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRight: `1px solid ${theme.palette.divider}`,
    background:
        "linear-gradient(90deg, rgba(158, 208, 158, 0.3) 0%, rgba(163, 234, 230, 0.5) 50%)",
}));

const BottomSection = styled(Box)(() => ({
    flex: "2 1 66.67%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}));

const LogoContainer = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(0), // Spacing in multiples of 8px
    display: "flex",
    justifyContent: "center",
}));

export default function Login() {
    function handleLogin() {
        const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL;

        if (!loginUrl) {
            console.error("Missing NEXT_PUBLIC_LOGIN_URL");
            return;
        }

        window.location.href = loginUrl;
    }

    return (
        <>
            <Container>
                <MainSection>
                    <TopSection>
                        <LogoContainer>
                            <Box
                                component="img"
                                src={logo}
                                alt="Logo"
                                sx={{ width: 130, height: 'auto', objectFit: 'cover' }}
                            />

                        </LogoContainer>
                    </TopSection>
                    <BottomSection>
                        <Typography
                            variant="h5"
                            component="h1"
                            gutterBottom
                            sx={{ fontWeight: 700, fontSize: "25px", marginBottom: "0px", color: "#262626" }}
                        >
                            Welcome to
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 700, fontSize: "61px", marginBottom: "20px", color: "#515151" }}
                        >
                            FleetHub
                        </Typography>
                        <Button
                            variant="outlined"
                            onClick={handleLogin}
                            sx={{
                                boxShadow: "#00000040",
                                width: "268px",
                                height: "39px",
                                background: "white",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "1px solid #4F4F4F"
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, fontSize: "16px", color: "#5D5D5D" }}
                            >
                                JLR SSO Login
                            </Typography>
                        </Button>
                    </BottomSection>
                </MainSection>
            </Container>
        </>
    );
}
