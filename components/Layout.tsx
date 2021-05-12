import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import { Box, Drawer } from "@material-ui/core";
import DrawerContents from "./DrawerContents";

type Props = {
  children?: ReactNode;
  title: string;
};

export const DrawerContext = createContext<{
  setDrawer: Dispatch<SetStateAction<boolean>>;
}>({
  setDrawer: () => {},
});

const Layout: React.FC<Props> = ({ children, title }: Props) => {
  const [isDrawer, setDrawer] = useState(false);
  return (
    <DrawerContext.Provider value={{ setDrawer }}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <NavBar title={"K.Hamanaka"} />
      </header>
      <main>
        <Box paddingTop={6}>{children}</Box>
      </main>
      <footer></footer>
      <Drawer
        anchor="right"
        open={isDrawer}
        onClose={() => {
          setDrawer(false);
        }}
      >
        <DrawerContents />
      </Drawer>
    </DrawerContext.Provider>
  );
};

export default Layout;
