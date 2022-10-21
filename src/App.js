import * as React from 'react';
import './App.css';
import { Box, Container, Slide, CssBaseline, Typography, Grid } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar";
import Titulo from "./Components/Titulo/Titulo";
import Banner from './Components/Banner/Banner';
import LogoOlist from "./assets/images/logo-olist.png";
import LogoBuser from "./assets/images/logo-buser.png";
import LogoDengo from "./assets/images/logo-dengo.png";
import LogoGptw from "./assets/images/logo-gptw.png";
import LogoLoft from "./assets/images/logo-loft.png";
import LogoDafiti from "./assets/images/logo-dafiti.png";
import LogoRappi from "./assets/images/logo-rappi.png";
import LogoOboticario from "./assets/images/logo-oboticario.png";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Navbar />
        <section className='section-banner'>
          <Banner />
        </section>

        <section className='section-clientes'>
          <Box>
            <Titulo>Clientes</Titulo>
            <Grid container spacing={{ xs: 2, md: 8 }} columns={{ xs: 12, sm: 6, md: 10 }}>
              <Grid item xs={12} md={7} sm={5}>
                <img className='logo' src={LogoOlist} alt="logo Olist" />
                <img className='logo' src={LogoBuser} alt="logo Buser" />
                <img className='logo' src={LogoDengo} alt="logo Dengo" />
                <img className='logo' src={LogoGptw} alt="logo GPTW" />
                <img className='logo' src={LogoLoft} alt="logo Loft" />
                <img className='logo' src={LogoDafiti} alt="logo Dafiti" />
                <img className='logo' src={LogoRappi} alt="logo Rappi" />
                <img className='logo' src={LogoOboticario} alt="logo oBoticário" />
              </Grid>
            </Grid>
          </Box>
        </section>
        <section className='section-sobre'>
          <Box>
            <Titulo>Sobre</Titulo>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur odio quam, sed dignissim enim pharetra sagittis. Ut ultrices venenatis magna, eu vulputate enim rhoncus at. Cras sollicitudin facilisis mi, quis congue leo porta a. Morbi fermentum eleifend lectus in eleifend. </Typography>
          </Box>
        </section>
      </Container>
    </React.Fragment >
  );
}

export default App;
