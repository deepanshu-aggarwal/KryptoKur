import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AppBar, Container, Toolbar, Typography, Select, MenuItem, makeStyles, createTheme, ThemeProvider} from '@material-ui/core'
import { KryptoState } from '../KryptoContext'

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
}))

function Header() {

  const classes = useStyles()
  const navigate = useNavigate()

  const {currency, setCurrency} = KryptoState()

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
      type: 'dark'
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static' >
        <Container>
          <Toolbar>
            <Typography
                variant='h6' 
                className={classes.title}
                onClick={() => navigate('/')}
                >
                KryptoKur
              </Typography>
            <Select 
              variant='outlined'
              style={{
                width: 100,
                height: 40,
                marginRight: 15
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header