import {SkillData} from '../../utils/sample-data';
import Layout from '../../components/Layout'
import React from 'react'
import {Grid, makeStyles} from "@material-ui/core";
import CardItem from "../../components/CardItem";

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px"
    }
});

const WithStaticProps = () => {
    const classes = useStyles();
    return (
        <Layout title="Skills">
            <h1>Skills</h1>
            <Grid
                container
                spacing={4}
                className={classes.gridContainer}
            >
                {SkillData.map((skill,i) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <CardItem skill={skill} key={i}/>
                    </Grid>
                ))}
            </Grid>
        </Layout>
    )
}

export default WithStaticProps
