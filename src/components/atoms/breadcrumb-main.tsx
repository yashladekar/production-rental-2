'use client';

import React, { useEffect, useState, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Box } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { useTheme } from "@mui/material/styles";

// Import from your newly created Design System
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"; // <-- Update this path to where your DS is located

const BreadcrumbsMain: React.FC = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const prevPathRef = useRef({ pathname, searchParams: searchParams.toString() });

    const [extraSegment, setExtraSegment] = useState<string | null>(null);
    const [previousPath, setPreviousPath] = useState<string>('');
    const theme = useTheme();

    // Detect context parameter
    useEffect(() => {
        const context = searchParams?.get('source');
        setExtraSegment(
            context === 'userDetails' ? 'userOrders' :
                context === 'spareOrder' ? 'spareOrderList' :
                    context === 'orderList' ? 'orderList' : null
        );
    }, [searchParams]);

    useEffect(() => {
        setPreviousPath(`${prevPathRef.current.pathname}?${prevPathRef.current.searchParams}`);
        prevPathRef.current = { pathname, searchParams: searchParams.toString() };
    }, [pathname, searchParams]);

    // Modified path processing
    const processPath = () => {
        let segments = pathname.split("/").filter(Boolean);
        if (extraSegment) {
            const lastSegment = segments.pop();
            if (lastSegment) {
                return [...segments, extraSegment, lastSegment];
            }
        }
        return segments;
    };

    const BreadcrumbsArray = processPath();

    const formatBreadcrumbItem = (item: string) => {
        if (!item) return "";
        const spaced = item.replace(/([a-z])([A-Z])/g, "$1 $2");
        return spaced.charAt(0).toUpperCase() + spaced.slice(1).toLowerCase();
    };

    if (!BreadcrumbsArray.length) return null;

    return (
        <Box sx={{ width: '100%', m: 0, p: 0, minHeight: 50 }}>
            <Breadcrumb>
                <BreadcrumbList>
                    {/* Static Dashboard Link (If the first route is NOT 'dashboard') */}
                    {BreadcrumbsArray[0] !== "dashboard" && (
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard" sx={{ display: 'flex', alignItems: 'center' }}>
                                <DashboardOutlinedIcon
                                    sx={{
                                        mb: "2px",
                                        mr: "4px", // slight margin between icon and text
                                        verticalAlign: "middle",
                                        fontSize: "20px",
                                        color: theme?.palette?.action?.disabled,
                                    }}
                                />
                                Dashboard
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    )}

                    {/* Dynamic Breadcrumbs Map */}
                    {BreadcrumbsArray.map((item, index) => {
                        const originalIndex = extraSegment
                            ? index >= BreadcrumbsArray.indexOf('userOrders')
                                ? index - 1
                                : index
                            : index;

                        const isUserOrdersSegment = item === 'userOrders';
                        const isSpareOrderListSegment = item === 'spareOrderList';
                        const isMcpOrderListSegent = item === 'orderList';

                        const href = isUserOrdersSegment
                            ? previousPath
                            : isSpareOrderListSegment ? "/spareList"
                                : isMcpOrderListSegent ? "/orderList"
                                    : "/" + BreadcrumbsArray.slice(0, originalIndex + 1).join("/");

                        const isLast = index === BreadcrumbsArray.length - 1;
                        const isDashboardRoot = index === 0 && item === "dashboard";

                        // Determine if we need to show the icon (only on root dashboard item)
                        const icon = isDashboardRoot ? (
                            <DashboardOutlinedIcon
                                sx={{
                                    mb: "2px",
                                    mr: "4px",
                                    verticalAlign: "middle",
                                    fontSize: "20px",
                                    color: isLast ? theme?.palette?.text?.secondary : theme?.palette?.action?.disabled,
                                }}
                            />
                        ) : null;

                        return (
                            <BreadcrumbItem key={index}>
                                {isLast ? (
                                    // If it's the last item, use BreadcrumbPage (Active state)
                                    <BreadcrumbPage sx={{ display: 'flex', alignItems: 'center' }}>
                                        {icon}
                                        {formatBreadcrumbItem(item)}
                                    </BreadcrumbPage>
                                ) : (
                                    // If it's not the last item, use BreadcrumbLink (Clickable state)
                                    <BreadcrumbLink href={href} sx={{ display: 'flex', alignItems: 'center' }}>
                                        {icon}
                                        {formatBreadcrumbItem(item)}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </Box>
    );
};

export default BreadcrumbsMain;