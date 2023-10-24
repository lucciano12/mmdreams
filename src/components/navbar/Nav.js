import React, { useState, useEffect } from 'react';
import { AppBar, Box, Button, Drawer, ListItemIcon, IconButton, MenuItem, List, Menu, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import Divider from '@mui/material/Divider';
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Collapse from '@mui/material/Collapse';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logomomo from '../../assets/images/Logomomo.jpg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../../assets/css/style.css'



const pages = ["Inicio", "Productos", "Contacto"];
const subPages = ["Animales", "Peliculas", "Otros", "Todos"];




export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [serviciosMenuOpen, setServiciosMenuOpen] = useState(null);

  const handleServiciosMenuOpen = (event) => {
    setServiciosMenuOpen(event.currentTarget);
  };

  const handleServiciosMenuClose = () => {
    setServiciosMenuOpen(null);
  };

  const [navBackground, setNavBackground] = useState('transparent');



  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (show) {
        setNavBackground('black');

      } else {
        setNavBackground('transparent');
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar position="fixed" style={{ background: navBackground }} >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <Box
                variant="outlined"
                color="secondary"
                component="img"
                sx={{
                  border: '1px solid #a74f7f',
                  borderRadius: 15,
                  margin: 1,
                  height: 80,
                  cursor: 'pointer',
                }}
                alt="Your logo."
                src={logomomo}
              />
            </Link>
          </Box>

          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              color="inherit"
              size="large"
              onClick={() => setOpen(true)}
              edge="end"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex", alignItems: "center" } }}>
            {pages.map((page) => (
              <React.Fragment key={page}>
                {page === "Productos" ? (
                  <Box>
                    <Button
                      color="inherit"
                      endIcon={<MenuIcon />}
                      onClick={handleServiciosMenuOpen}
                    >
                      Productos
                    </Button>
                    <Menu
                      anchorEl={serviciosMenuOpen}
                      open={Boolean(serviciosMenuOpen)}
                      onClose={handleServiciosMenuClose}
                    >
                      {subPages.map((subPage) => (
                        <MenuItem
                          key={subPage}
                          component={Link}
                          to={`/${subPage.toLowerCase()}`}
                          onClick={handleServiciosMenuClose}
                        >
                          {subPage}
                        </MenuItem>
                      ))}
                    </Menu>

                  </Box>
                ) : (
                  <Button
                    color="inherit"
                    component={Link}
                    to={`/${page === "Inicio" ? "" : page.toLowerCase()}`}
                  >
                    {page}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
        PaperProps={{
          sx: {
            backgroundColor: '#8d99ae',
          },
        }}
      >
        <NavListDrawer
          navArrayLinks={pages}
          subPages={subPages}
          setOpen={setOpen}
          serviciosOpen={serviciosMenuOpen}
          toggleServicios={handleServiciosMenuOpen}
        />
      </Drawer>
    </>
  );
}

function NavListDrawer({ navArrayLinks, setOpen }) {
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const serviciosContainerStyle = {
    backgroundColor: serviciosOpen ? "white" : "transparent", // Cambia el color según tu preferencia
  };
  const toggleServicios = () => {
    setServiciosOpen(!serviciosOpen);
  };

  return (
    <Box sx={{ width: 250 }}>
      <IconButton onClick={() => setOpen(false)} style={{ alignSelf: 'flex-end' }}>
        <ChevronRightIcon />
      </IconButton>
      <Divider />
      <List sx={{ width: '100%' }} component="nav">
        <div style={{ marginTop: "auto", textAlign: "center", padding: "16px" }}>
          <Box
            variant="outlined"
            color="secondary"
            component="img"
            sx={{
              borderRadius: 15,
              margin: 1,
              height: 80,
              cursor: 'pointer',
            }}
            alt="Your logo."
            src={logomomo}
          />
        </div>

        {navArrayLinks.map((item) => (
          <div key={item}>
            {item === "Productos" ? (
              <div>
                <ListItemButton onClick={toggleServicios}>
                  <ListItemText primary={item} />
                  {serviciosOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Collapse in={serviciosOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding style={serviciosContainerStyle}>
                    {subPages.map((subPage) => (
                      <ListItemButton
                        key={subPage}
                        component={Link}
                        to={`/${subPage.toLowerCase()}`}
                        onClick={() => setOpen(false)}
                      >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary={subPage} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            ) : (
              <ListItemButton
                component={Link}
                to={`/${item === "Inicio" ? "" : item.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            )}
          </div>
        ))}
      </List>
    </Box>
  );
}
