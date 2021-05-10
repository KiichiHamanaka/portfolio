import React from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";
import {Skill} from '../interfaces'

type Props = {
    skill: Skill
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 160,
        width: '100%',
        display: "block",
        margin: "0",
    }
});

const CardItem = ({skill}:Props) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={skill.image}
                        title={skill.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {skill.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {skill.desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CardItem
