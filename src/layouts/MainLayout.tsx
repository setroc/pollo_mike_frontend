import { useNavigate } from "react-router-dom"
import { Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material"
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import FlatwareTwoToneIcon from '@mui/icons-material/FlatwareTwoTone';
import { blue } from "@mui/material/colors";

export const MainLayout = () => {
  const navigate = useNavigate();
  const navigateTo = (url : string) => {
    navigate({ pathname: url });
  }

  return (
    <Container
      fixed
      sx={{ 
        // height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex'
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} mt='1rem'>
          <Typography variant='h1' fontSize='2rem' textAlign='center'>POLLO MIKE</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card variant='outlined'>
            <CardActionArea onClick={() => navigateTo('/Stock/CurrentStock')}>
              <CardContent>
                <Inventory2TwoToneIcon sx={{ fontSize:80, color: blue[500], width: '100%', m: '0 auto' }}  />
                <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                  Stock del día
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card variant='outlined'>
            <CardActionArea>
              <CardContent>
                <FlatwareTwoToneIcon sx={{ fontSize:80, color: blue[500], width: '100%', m: '0 auto' }} />
                <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                  Productos
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card variant='outlined'>
            <CardActionArea onClick={() => navigateTo('/Orders/CurrentOrders')}>
              <CardContent>
                <ShoppingBagTwoToneIcon sx={{ fontSize:80, color: blue[500], width: '100%', m: '0 auto' }} />
                <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                  Ordenes
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}
