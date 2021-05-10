import React, {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react'
import Head from 'next/head'
import NavBar from "./NavBar";
import {Drawer, makeStyles} from "@material-ui/core";
import DrawerContents from "./DrawerContents";

type Props = {
    children?: ReactNode
    title: string
}

export const DrawerContext = createContext<{
    setDrawer: Dispatch<SetStateAction<boolean>>
}>({
    setDrawer: () => {},
})

const useStyles = makeStyles({
    footer: {
        position: 'fixed',
        bottom: 0,
        align: 'center',
    }
});

const Layout = ({children, title}: Props) => {
    const classes = useStyles();
    const [isDrawer, setDrawer] = useState(false)
    return (
        <DrawerContext.Provider value={{ setDrawer }}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <header>
                <NavBar title={"K.Hamanaka"}/>
            </header>
            {children}
            <footer>
                <p className={classes.footer}>Copyright KiichiHamanaka ©{new Date().getFullYear()}.</p>
            </footer>
            <Drawer
                anchor="right"
                open={isDrawer}
                onClose={() => {
                    setDrawer(false)
                }}
            >
                <DrawerContents/>
            </Drawer>
        </DrawerContext.Provider>
    )
}

export default Layout
