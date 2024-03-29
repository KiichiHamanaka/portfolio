import Layout from "../components/Layout";
import TypeWriter from "../components/TypeWriter";
import { Grid } from "@material-ui/core";
import React from "react";

const IndexPage: React.VFC = () => {
  return (
    <Layout title="Home">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ minHeight: "90vh" }}
      >
        <TypeWriter title={"Kiichi Hamanaka"} />
      </Grid>
    </Layout>
  );
};

export default IndexPage;
