import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { SnackbarProvider } from 'notistack';
import infoFill from '@iconify/icons-eva/info-fill';
import alertCircleFill from '@iconify/icons-eva/alert-circle-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import checkmarkCircle2Fill from '@iconify/icons-eva/checkmark-circle-2-fill';
// material
import { alpha, useTheme } from '@mui/material/styles';
import { Box, GlobalStyles } from '@mui/material';

// ----------------------------------------------------------------------

function SnackbarStyles() {
     const theme = useTheme();
     const isLight = theme.palette.mode === 'light';
     
     return (
          <GlobalStyles
               styles={{
                    '#root': {
                         '& .SnackbarContent-root': {
                              width: '100%',
                              padding: '10px',
                              margin: "0 0 0 0",
                              boxShadow: " 0px 10px 14px rgba(34, 34, 34, 0.04), 0px 8px 16px rgba(160, 160, 160, 0.03)",
                              borderRadius:  8,
                              color: '#FFFFFF',
                              backgroundColor: '#161C24',
                              '&.SnackbarItem-variantSuccess, &.SnackbarItem-variantError, &.SnackbarItem-variantWarning, &.SnackbarItem-variantInfo':
                                   {
                                        color:'#212B36',
                                        backgroundColor: '#fff'
                                   }
                         },
                         '& .SnackbarItem-message': {
                              padding: '0 !important',
                              fontSize:"12px",
                              fontWeight: 600,
                              fontFamily:' IRANYekanRegular, sans-serif'
                         },
                         '& .SnackbarItem-action': {
                              marginRight: 0,
                              color:'#637381',
                              '& svg': { width: 20, height: 20 }
                         }
                    }
               }}
          />
     );
}



function SnackbarIcon({ icon, color }) {
     return (
          <Box
               component="span"
               sx={{
                    mr: 1.5,
                    width: 40,
                    height: 40,
                    display: 'flex',
                    borderRadius: 1.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: `${color}.main`,
                    bgcolor: (theme) => alpha(theme.palette[color].main, 0.16)
               }}
          >
               <Icon icon={icon} width={24} height={24} />
          </Box>
     );
}

NotistackProvider.propTypes = {
     children: PropTypes.node
};

export default function NotistackProvider({ children }) {
     return (
          <>
               <SnackbarStyles />
               
               <SnackbarProvider
                    dense
                    maxSnack={5}
                    // preventDuplicate
                    autoHideDuration={3000}
                    anchorOrigin={{
                         vertical: 'top',
                         horizontal: 'right'
                    }}
                    iconVariant={{
                         success: <SnackbarIcon icon={checkmarkCircle2Fill} color="success" />,
                         error: <SnackbarIcon icon={infoFill} color="error" />,
                         warning: <SnackbarIcon icon={alertTriangleFill} color="warning" />,
                         info: <SnackbarIcon icon={alertCircleFill} color="info" />
                    }}
               >
                    {children}
               </SnackbarProvider>
          </>
     );
}
