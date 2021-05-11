import Layout from '../components/Layout'
import TypeWriter from "../components/TypeWriter";
import {Grid} from "@material-ui/core";
import React from "react";


const IndexPage = () => {
    return (
        <Layout title="Home">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ minHeight: '90vh' }}
            >
                <h1>
                    <TypeWriter title={'Kiichi Hamanaka'}/>
                </h1>
            </Grid>
        </Layout>

    )

}

export default IndexPage
