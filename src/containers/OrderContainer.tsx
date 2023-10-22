import { Box, Grid } from "@mui/material"
import { NavigationBar, OrderDetail, ProductCard } from "../components"


export const OrderContainer = () => {
  return (
    <Box 
      sx={{ 
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex'
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          flex: 1 
        }}
      >
        <Box>
          <NavigationBar />
        </Box>
        <Grid container
          sx={{
            flex: 1,
            overflow: 'hidden',
          }}
        >
          <Grid 
            container item 
            xs={4} sm={6} lg={8} 
            spacing={2} 
            justifyContent='center' 
            sx={{ 
              backgroundColor: '#f1f5fe', 
              p: 
              3, 
              overflow: 
              'auto', 
              height: 
              '100%', 
              mt:0
            }}
          >
            <Grid item>
              <ProductCard />
            </Grid>
          </Grid>

          <Grid 
            item 
            xs={8} sm={6} lg={4}
          >
            <OrderDetail />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}