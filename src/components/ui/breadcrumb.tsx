// 'use client';

// import * as React from 'react';
// import {
//     Breadcrumbs as MuiBreadcrumbs,
//     BreadcrumbsProps as MuiBreadcrumbsProps,
//     Box,
//     Typography,
// } from '@mui/material';
// import { ChevronRight, MoreHorizontal } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import Link from 'next/link';

// // ----------------------------------------------------------------------
// // 1. Breadcrumb Root (The <nav> container)
// // ----------------------------------------------------------------------
// export const Breadcrumb = React.forwardRef<
//     HTMLElement,
//     React.ComponentPropsWithoutRef<'nav'> & {
//         separator?: React.ReactNode;
//     }
// >(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
// Breadcrumb.displayName = 'Breadcrumb';

// // ----------------------------------------------------------------------
// // 2. Breadcrumb List (MUI's <Breadcrumbs>)
// // ----------------------------------------------------------------------
// export interface BreadcrumbListProps extends MuiBreadcrumbsProps {
//     className?: string;
// }

// export const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
//     ({ className, sx, separator, ...props }, ref) => (
//         <MuiBreadcrumbs
//             ref={ref}
//             className={cn('ds-breadcrumb-list', className)}
//             // We use our custom separator component below, but if a dev overrides it here, we respect it.
//             separator={separator ?? <BreadcrumbSeparator />}
//             sx={{
//                 // Remove MUI's default margin/padding
//                 margin: 0,
//                 padding: 0,
//                 // Style the internal `ol` to match Shadcn flex layout
//                 '& .MuiBreadcrumbs-ol': {
//                     display: 'flex',
//                     flexWrap: 'wrap',
//                     alignItems: 'center',
//                     gap: 0.5, // Space between items
//                     breakInside: 'avoid',
//                     fontSize: '0.875rem', // text-sm
//                     color: 'text.secondary', // text-muted-foreground
//                 },
//                 // Style the internal separator wrapper
//                 '& .MuiBreadcrumbs-separator': {
//                     margin: 0, // Reset MUI's default margins, our separator handles its own spacing
//                     display: 'flex',
//                 },
//                 ...sx,
//             }}
//             {...props}
//         />
//     )
// );
// BreadcrumbList.displayName = 'BreadcrumbList';

// // ----------------------------------------------------------------------
// // 3. Breadcrumb Item (The <li> wrapper)
// // ----------------------------------------------------------------------
// // MUI handles the <li> internally inside <Breadcrumbs>, but for the Shadcn API, 
// // developers expect to wrap their links in an Item. We just export a Box acting as an inline-flex container.
// export const BreadcrumbItem = React.forwardRef<
//     HTMLSpanElement,
//     React.ComponentPropsWithoutRef<'span'>
// >(({ className, ...props }, ref) => (
//     <Box
//         component="span"
//         ref={ref}
//         className={cn('ds-breadcrumb-item inline-flex items-center gap-1.5', className)}
//         sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
//         {...props}
//     />
// ));
// BreadcrumbItem.displayName = 'BreadcrumbItem';

// // ----------------------------------------------------------------------
// // 4. Breadcrumb Link (The clickable anchor)
// // ----------------------------------------------------------------------
// export const BreadcrumbLink = React.forwardRef<
//     HTMLAnchorElement,
//     React.ComponentPropsWithoutRef<typeof Link> & {
//         asChild?: boolean; // For Radix compatibility if needed, though we default to Next.js Link
//     }
// >(({ className, ...props }, ref) => {
//     return (
//         <Box
//             component={Link}
//             ref={ref}
//             className={cn('ds-breadcrumb-link', className)}
//             sx={{
//                 color: 'inherit', // Inherit from BreadcrumbList (text.secondary)
//                 textDecoration: 'none',
//                 transition: 'color 0.2s',
//                 '&:hover': {
//                     color: 'text.primary', // Darken on hover
//                 },
//             }}
//             {...props}
//         />
//     );
// });
// BreadcrumbLink.displayName = 'BreadcrumbLink';

// // ----------------------------------------------------------------------
// // 5. Breadcrumb Page (The active/current location text)
// // ----------------------------------------------------------------------
// export const BreadcrumbPage = React.forwardRef<
//     HTMLSpanElement,
//     React.ComponentPropsWithoutRef<'span'>
// >(({ className, ...props }, ref) => (
//     <Typography
//         component="span"
//         ref={ref}
//         role="link"
//         aria-disabled="true"
//         aria-current="page"
//         className={cn('ds-breadcrumb-page', className)}
//         sx={{
//             fontWeight: 500, // font-medium (differentiates it from links)
//             color: 'text.primary', // Darker text for active state
//         }}
//         {...props}
//     />
// ));
// BreadcrumbPage.displayName = 'BreadcrumbPage';

// // ----------------------------------------------------------------------
// // 6. Breadcrumb Separator (The icon)
// // ----------------------------------------------------------------------
// export const BreadcrumbSeparator = ({
//     children,
//     className,
//     ...props
// }: React.ComponentProps<'li'>) => (
//     <Box
//         component="span"
//         role="presentation"
//         aria-hidden="true"
//         className={cn('ds-breadcrumb-separator', className)}
//         sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             color: 'text.secondary',
//             mx: 0.5, // Small horizontal margin
//         }}
//         {...props}
//     >
//         {children ?? <ChevronRight size={16} />}
//     </Box>
// );
// BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

// // ----------------------------------------------------------------------
// // 7. Breadcrumb Ellipsis (For collapsed states)
// // ----------------------------------------------------------------------
// export const BreadcrumbEllipsis = ({
//     className,
//     ...props
// }: React.ComponentProps<'span'>) => (
//     <Box
//         component="span"
//         role="presentation"
//         aria-hidden="true"
//         className={cn('ds-breadcrumb-ellipsis', className)}
//         sx={{
//             display: 'flex',
//             height: 24,
//             width: 24,
//             alignItems: 'center',
//             justifyContent: 'center',
//             color: 'text.secondary',
//         }}
//         {...props}
//     >
//         <MoreHorizontal size={16} />
//         <span className="sr-only">More</span>
//     </Box>
// );
// BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';


'use client';

import * as React from 'react';
import {
    Breadcrumbs as MuiBreadcrumbs,
    BreadcrumbsProps as MuiBreadcrumbsProps,
    Box,
    BoxProps,
    Typography,
    TypographyProps,
} from '@mui/material';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// ----------------------------------------------------------------------
// 1. Breadcrumb Root 
// ----------------------------------------------------------------------
export const Breadcrumb = React.forwardRef<
    HTMLElement,
    React.ComponentPropsWithoutRef<'nav'> & {
        separator?: React.ReactNode;
    }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = 'Breadcrumb';

// ----------------------------------------------------------------------
// 2. Breadcrumb List (Applying your custom CSS here)
// ----------------------------------------------------------------------
export interface BreadcrumbListProps extends MuiBreadcrumbsProps {
    className?: string;
}

export const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
    ({ className, sx, separator, ...props }, ref) => (
        <MuiBreadcrumbs
            ref={ref}
            className={cn('ds-breadcrumb-list', className)}
            separator={separator ?? <BreadcrumbSeparator />}
            sx={{
                margin: 0,
                padding: '1rem 0', // Ported from your old CSS (padding: 1rem; padding-left: 0rem;)
                textTransform: 'uppercase', // Ported from your old CSS
                '& .MuiBreadcrumbs-ol': {
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '0.625rem', // Ported from your old CSS
                    breakInside: 'avoid',
                    fontSize: '0.875rem',
                    color: 'text.secondary',
                    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif', // Ported from your old CSS
                },
                '& .MuiBreadcrumbs-separator': {
                    margin: 0,
                    display: 'flex',
                },
                ...sx,
            }}
            {...props}
        />
    )
);
BreadcrumbList.displayName = 'BreadcrumbList';

// ----------------------------------------------------------------------
// 3. Breadcrumb Item
// ----------------------------------------------------------------------
export const BreadcrumbItem = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
    <Box
        component="span"
        ref={ref}
        className={cn('ds-breadcrumb-item inline-flex items-center', className)}
        sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
        {...props}
    />
));
BreadcrumbItem.displayName = 'BreadcrumbItem';

// ----------------------------------------------------------------------
// 4. Breadcrumb Link (Clickable paths)
// ----------------------------------------------------------------------
export const BreadcrumbLink = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<typeof Link> & {
        asChild?: boolean;
        sx?: BoxProps['sx'];
    }
>(({ className, sx, ...props }, ref) => {
    return (
        <Box
            component={Link}
            ref={ref}
            className={cn('ds-breadcrumb-link', className)}
            sx={{
                color: 'grey', // Ported from your old CSS
                textDecoration: 'none',
                transition: 'color 0.2s',
                '&:hover': {
                    color: 'text.primary', // Adds a nice hover effect
                },
                ...sx,
            }}
            {...props}
        />
    );
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

// ----------------------------------------------------------------------
// 5. Breadcrumb Page (Active/Current location)
// ----------------------------------------------------------------------
export const BreadcrumbPage = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<'span'>
    & { sx?: TypographyProps['sx'] }
>(({ className, sx, ...props }, ref) => (
    <Typography
        component="span"
        ref={ref}
        role="link"
        aria-disabled="true"
        aria-current="page"
        className={cn('ds-breadcrumb-page', className)}
        sx={{
            fontWeight: 500,
            color: 'text.secondary', // Matches the active state from your old implementation
            fontFamily: 'inherit',
            ...sx,
        }}
        {...props}
    />
));
BreadcrumbPage.displayName = 'BreadcrumbPage';

// ----------------------------------------------------------------------
// 6. Breadcrumb Separator
// ----------------------------------------------------------------------
export const BreadcrumbSeparator = ({
    children,
    className,
    ...props
}: React.ComponentProps<'li'>) => (
    <Box
        component="span"
        role="presentation"
        aria-hidden="true"
        className={cn('ds-breadcrumb-separator', className)}
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'grey', // Matches your custom link colors
            mx: 0.5,
        }}
        {...props}
    >
        {children ?? <Typography sx={{ mx: 0.5, color: 'grey' }}>/</Typography>}
    </Box>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

// ----------------------------------------------------------------------
// 7. Breadcrumb Ellipsis
// ----------------------------------------------------------------------
export const BreadcrumbEllipsis = ({
    className,
    ...props
}: React.ComponentProps<'span'>) => (
    <Box
        component="span"
        role="presentation"
        aria-hidden="true"
        className={cn('ds-breadcrumb-ellipsis', className)}
        sx={{
            display: 'flex',
            height: 24,
            width: 24,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text.secondary',
        }}
        {...props}
    >
        <MoreHorizontal size={16} />
        <span className="sr-only">More</span>
    </Box>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';