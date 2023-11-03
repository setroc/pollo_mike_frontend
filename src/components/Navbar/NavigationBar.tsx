import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <AppBar position='sticky' sx={{ backgroundColor: 'white'}}>
      <Toolbar sx={{ justifyContent: { xs: 'space-between', sm: 'normal'} }} >

        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          <MenuIcon sx={{ color: 'black' }} />
        </IconButton>

        <Box sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1 }}>
            <Button sx={{ color: '' }} >
              <Link to='/NewOrder' style={{ textDecoration: 'none', color: 'inherit' }}>
                Nuevo pedido
              </Link>
            </Button>
            <Button sx={{ color: 'black' }} >
              <Link to='/LayawayOrders' style={{ textDecoration: 'none', color: 'inherit' }}>
                Apartados
              </Link>
            </Button>
            <Button sx={{ color: 'black' }} >
              <Link to='/CurrentOrders' style={{ textDecoration: 'none', color: 'inherit' }}>
                Ordenes en curso
              </Link>
            </Button>
            <Button sx={{ color: 'black' }} >
              <Link to='/PastOrders' style={{ textDecoration: 'none', color: 'inherit' }}>
                Ordenes  anteriores
              </Link>
            </Button>
        </Box>

        <Typography variant="h6" component="div" sx={{ color: 'black' }}>
          Pollo Mike
        </Typography>

      </Toolbar>
    </AppBar>
  )
}