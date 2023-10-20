import { Typography } from '@mui/material';
import Drawer  from '@mui/material/Drawer';

export const SideMenu = () => {
  return (
    <Drawer
      anchor='right'
      open={true}
      PaperProps={{ style: { width: '30%' } }}
      // onClose={toggleDrawer(anchor, false)}
    >
      <Typography variant='h6'>
        Detalle de la orden
      </Typography>
    </Drawer>
  )
}
