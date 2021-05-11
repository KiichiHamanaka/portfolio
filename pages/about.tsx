import Layout from '../components/Layout'
import {Divider, Grid, makeStyles, Paper} from "@material-ui/core";
import React from "react";
import Image from 'next/image'

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px"
    }
});

const AboutPage = () => {

    const classes = useStyles()
    return (
        <Layout title="About">

            <h1>About</h1>
            <Paper className={classes.gridContainer}>
                <Grid  container spacing={3}>
                    <Grid item xs={6}>
                        <Image
                            src='/img/Ishikawa.png'
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        ></Image>
                    </Grid>
                    <Grid item xs={6}>
                        <h2>濵中貴一</h2>
                        <Divider/>
                        <h3>出身</h3>
                        石川県
                        <h3>学歴</h3>
                        金沢工業大学
                        <h3>趣味</h3>
                        筋トレ,ボードゲーム,DTM,etc...

                    </Grid>
                </Grid>
            </Paper>


        </Layout>
    );
}


export default AboutPage
