import './header.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom'


const Navbar = () => {
  const history = useHistory()
  const navigate = (path) => {
      history.push(path)
  }
    return (
        
           
<div className={'principal-navbar'}>

<div className={'first-nav'}>

<ul>
    <span className={'text-first-nav'}> Nous soutenir</span>
    <span className={'text-first-nav'}> Médiathèque Mahieddine Bachtarzi </span>
    <span className={'text-first-nav'}>Nous contacter</span>
    <span className={'text-first-nav-ad'}>Admission</span>
</ul>


<span className={'btn-conex'}>
    
    <p className={'co'} onClick={() => navigate('/login')}>CONNEXION</p></span>

</div>
<div className={'second-nav'}>


<div className={'text-second-nav-title'}>
<span >Conservatoire National <br/>Superieur de musique <br/>d'Alger</span>
</div>



<div className={'text-second-nav'}>

<span className={'text-second-nav-text'}>Le conservatoire</span>

<span className={'text-second-nav-text'}>Le Cursus</span>

<span className={'text-second-nav-text'}>Actualités</span>

<span className={'text-second-nav-text'}>Concours</span>

</div>



<div className={'b-m'}>

    <div className={'btn-media'}>
        
        <span className={'espace-media'}>Espace médias</span> </div>
</div>

</div>



<div className={'img-n'} >

<div className={'inside'}>
                    <div className={'title'}>
                        <h1>Concours d'Admission à l'école Andalouse</h1>
                        </div>

</div>

<div className={'btn-inscription'}> <p className={'je-minscris'}>Je m'inscris</p></div>

</div>



  <div className={'div-principal'}>

    <div className={'div-cards'}>
  
  <Card className={'main-card'}>
      <CardActionArea>
        <CardMedia
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Les nouvelles methodologies d'apprendtissage 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Partager
        </Button>
        <Button size="small" color="primary">
        En savoir +
        </Button>
      </CardActions>
    </Card>


    <Card className={'main-card'}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Enseigner le piano aux seniors
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Partager
        </Button>
        <Button size="small" color="primary">
          En savoir +
        </Button>
      </CardActions>
    </Card>


    <Card className={'main-card'}>
      <CardActionArea>
        <CardMedia
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Actualités des Festivals à venir
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Partager
        </Button>
        <Button size="small" color="primary">
        En savoir +
        </Button>
      </CardActions>
    </Card>


</div>


  </div>


<div className={'middle-nav'}></div>



 </div>

        
    )
}


export default Navbar;