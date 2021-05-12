import { skillData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import CardItem from "../../components/CardItem";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});

const SkillPage: React.VFC = () => {
  const classes = useStyles();
  return (
    <Layout title="Skills">
      <h1>Skills</h1>
      <Grid container spacing={4} className={classes.gridContainer}>
        {skillData.map((skill, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <CardItem skill={skill} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default SkillPage;
