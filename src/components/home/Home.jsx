import React from "react";
import {
    Box,
    Grid,
    Typography,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

import Bg from "./homeHeaderBg.jpg";
import Img from "./homeHeaderImg.jpg";
import Img1 from "./img1.jpg";
import Img2 from "./img2.jpg";
import Img3 from "./img3.jpg";
import Img4 from "./img4.jpg";
import Img5 from "./img5.jpg";
import Img6 from "./img6.jpg";

const Home = () => {
    return (
        <>
            {/* Header */}
            <header style={{ color: "#fff" }}>
                <Box
                    sx={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(${Bg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: "50",
                        padding: "5rem 0 13rem",
                    }}
                >
                    <div className="container">
                        <Grid
                            container
                            spacing={3}
                            sx={{ alignItems: "center" }}
                        >
                            <Grid
                                item
                                xs={12}
                                sm={7}
                                sx={{
                                    textAlign: "center",
                                    paddingInline: "1rem",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: "bold",
                                        lineHeight: "1",
                                        fontSize: "3.5rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Find The Home You Deserve With Us
                                </Typography>
                                <Typography
                                    variant="p"
                                    sx={{ fontSize: "1.2rem" }}
                                >
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Quaerat, exercitationem.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Box
                                    component="img"
                                    sx={{
                                        width: "100%",
                                        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                                    }}
                                    src={Img}
                                ></Box>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </header>

            {/* Properties */}
            <section>
                <div className="container">
                    <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
                        Our Featured Properties
                    </Typography>

                    <Grid container spacing={2} sx={{ marginTop: "2%" }}>
                        {[
                            {
                                label: "House 1",
                                text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter",

                                img: Img1,
                            },
                            {
                                label: "House 2",
                                text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter",

                                img: Img2,
                            },
                            {
                                label: "House 3",
                                text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter",

                                img: Img3,
                            },
                            {
                                label: "House 4",
                                text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter",

                                img: Img4,
                            },
                            {
                                label: "House 5",
                                text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter",

                                img: Img5,
                            },
                            {
                                label: "House 6",
                                text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter",

                                img: Img6,
                            },
                        ].map((card, index) => {
                            return (
                                <Grid item xs={12} md={4} key={card}>
                                    <Card
                                        sx={{ maxWidth: 345, margin: "auto" }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            image={card.img}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                {card.label}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                {card.text}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link
                                                to={"/"}
                                                style={{
                                                    textDecoration: "none",
                                                    backgroundColor: "#2B74E1",
                                                    color: "white",
                                                }}
                                            >
                                                <Button
                                                    size="small"
                                                    // color="primary"
                                                    sx={{
                                                        padding: "5px 6px",
                                                        color: "white",
                                                        textTransform: "none",
                                                        border: "1px solid #2B74E1",

                                                        borerRadius: "8px",
                                                        "&:hover": {
                                                            backgroundColor:
                                                                "#FFFFFF",
                                                            color: "#2B74E1",
                                                            border: "1px solid #2B74E1",
                                                        },
                                                    }}
                                                >
                                                    Detail
                                                </Button>
                                            </Link>
                                        </CardActions>
                                        <CardActions>
                                            <CardHeader
                                                avatar={
                                                    <Avatar
                                                        sx={{ bgcolor: "red" }}
                                                        aria-label="recipe"
                                                    ></Avatar>
                                                }
                                                title="Shrimp and Chorizo Paella"
                                            />
                                        </CardActions>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            </section>

            {/* Contact Us */}
            <section style={{ backgroundColor: "#CDF9F4" }}>
                <div className="container" style={{ padding: "8rem 2rem" }}>
                    <Grid
                        container
                        spacing={8}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid container item xs={12} md={7} spacing={5}>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h4"
                                    sx={{ fontWeight: "bolder" }}
                                >
                                    Contact Us
                                </Typography>
                                <Typography
                                    sx={{
                                        marginTop: "2%",
                                        fontSize: "1rem",
                                        color: "#6c757d",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Non, nemo dolorem amet
                                    cupiditate sequi cum?
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bolder",
                                        fontSize: "1.4rem",
                                    }}
                                >
                                    We Will Get In Touch
                                </Typography>
                                <Typography
                                    sx={{
                                        marginTop: "2%",
                                        fontSize: "1rem",
                                        color: "#6c757d",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Non,
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bolder",
                                        fontSize: "1.4rem",
                                    }}
                                >
                                    Get Instant Support From Us
                                </Typography>
                                <Typography
                                    sx={{
                                        marginTop: "2%",
                                        fontSize: "1rem",
                                        color: "#6c757d",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Non,
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box
                                component="img"
                                sx={{
                                    height: "85%",
                                    width: "75%",
                                    margin: "auto",
                                }}
                                src={Img}
                            />
                        </Grid>
                    </Grid>
                </div>
            </section>
        </>
    );
};

export default Home;
