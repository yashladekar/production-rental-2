import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Components {
        MuiDataGrid?: {
            styleOverrides?: {
                root?: React.CSSProperties;
                columnHeader?: React.CSSProperties;
                cell?: React.CSSProperties;
                footerContainer?: React.CSSProperties;
                pagination?: React.CSSProperties;
                paginationButton?: React.CSSProperties;
                paginationInput?: React.CSSProperties;
            };
        };
    }
}