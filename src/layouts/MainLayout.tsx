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
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex'
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} mt='1rem'>
          <Typography variant='h1' fontSize='2rem' textAlign='center'>POLLO MIKE</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card variant='outlined'>
            <CardActionArea onClick={() => navigateTo('/Orders/CurrentOrders')}>
              {/* <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              /> */}
              <CardContent>
                <Inventory2TwoToneIcon sx={{ fontSize:80, color: blue[500] }}  />
                <Typography gutterBottom variant="h5" component="div">
                  Stock del día
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card variant='outlined'>
            <CardActionArea>
              {/* <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              /> */}
              <CardContent>
                <FlatwareTwoToneIcon sx={{ fontSize:80, color: blue[500] }} />
                <Typography gutterBottom variant="h5" component="div">
                  Productos
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card variant='outlined'>
            <CardActionArea>
              {/* <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              /> */}
              <CardContent>
                <ShoppingBagTwoToneIcon sx={{ fontSize:80, color: blue[500] }} />
                <Typography gutterBottom variant="h5" component="div">
                  Ordenes
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid> */}
      </Grid>


      {/* <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          flex: 1 
        }}
      >

        <Link to='Orders/CurrentOrders' style={{ textDecoration: 'none', color: 'inherit' }}>
          Ordenes
        </Link>
        
      </Box> */}
    </Container>
  )
}
