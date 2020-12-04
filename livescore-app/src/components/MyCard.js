import React from "react"
import {Card, CardContent, Typography} from "@material-ui/core";
import {CardActions, Button} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import img from "../img/vs.png";

const MyCard =()=>{

const getMatchCart =() => {
    return (
        <Card style={{marginTop: 20 }}>
        <CardContent>
        <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
                <Typography variant="h5">Frist Team</Typography>
            </Grid>
            <Grid item>
              <img style={{width: 85}} src={img} alt="" />
            </Grid>
            <Grid item>
                <Typography variant="h5">Second Team</Typography>
            </Grid>

        </Grid>
         </CardContent>
         <CardActions>
             <Grid container justify="center">
             <Button item variant="contained" color="primary">
                 Show Detail
             </Button>
             <Button style={{marginLeft: 10}} item variant="contained" color="primary">
                {new Date().toString()}
             </Button>

             </Grid>
         </CardActions>

        </Card>
    );
};

    return getMatchCart();
};


export default MyCard;