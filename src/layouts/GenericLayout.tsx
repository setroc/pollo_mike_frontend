import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"

import { NavigationBar } from "../components"

export const GenericLayout = () => {
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
        
        <Outlet />
      </Box>
    </Box>
  )
}
