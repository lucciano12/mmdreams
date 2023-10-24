import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import "../../assets/css/style.css"

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                p: 6,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Sobre nosotros
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Somos XYZ company, dedicados a proporcionar el mejor servicio a nuestros clientes.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Contáctanos
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Rancagua, Estado 140
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Teléfono: +569 40224578
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Encuéntranos en
                        </Typography>
                        <Link href="https://www.facebook.com/" color="inherit">
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"
                            color="inherit"
                            sx={{ pl: 1, pr: 1 }}
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://www.twitter.com/" color="inherit">
                            <Twitter />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Ubicacion
                        </Typography>
                        <div className="MapaUbicacion">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.1788568632774!2d-70.7421483842004!3d-34.1673445420478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663436ad115152d%3A0xcc6f51f525da703c!2sEstado%20144%2C%20Rancagua%2C%20O'Higgins!5e0!3m2!1ses-419!2scl!4v1654324543413!5m2!1ses-419!2scl"
                                title="Mapa de ubicación"
                                style={{
                                    border: '0',
                                    width: '100%',
                                    height: '100%',
                                }}
                            ></iframe>
                        </div>
                    </Grid>

                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {"Copyright © "}
                        <Link color="inherit" >
                            PatyLashes
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
