import './MediaCard.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions'; 
import CardContent from '@mui/material/CardContent'; 
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MediaCard() {
    return (
        <div className='col'>
    <div className='car'>
    <Card sx={{ width: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn0.weddingwire.in/vendor/9392/3_2/320/jpg/wedding-planners-marigold-pages-wedding-company-stage-decor-4_15_449392-168551916563385.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Marigold Pages Wedding Company
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Marigold Pages Wedding Company, situated near Malviya Nagar in South Delhi, is a dedicated wedding planning firm. Boasting a highly professional and motivated team with extensive event experience, they have the expertise to turn your vision into a beautifully designed and memorable wedding day
          </Typography>
        </CardContent>
            <CardActions>
            <Button size="large">REQUEST PRICING</Button>
            </CardActions>
      </CardActionArea>
    </Card>
    </div>

    <div className='car'>
    <Card sx={{ width:270  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn0.weddingwire.in/vendor/2053/3_2/320/jpg/modern-events-10_15_152053-157615025595042.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mordern Events,Goa
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Modern Events is a wedding planning company based in the city of Goa. They can offer you the best in class assistance and plan each of your wedding functions most delightfully. Weddings in India are a lavish celebration with many different functions spread over weeks.years and are a self-motivated team of individuals who can offer you the best wedding packages.
          </Typography>
        </CardContent>
            <CardActions>
            <Button size="large">REQUEST PRICING</Button>
            </CardActions>
      </CardActionArea>
    </Card>
    </div>
    <div className='car'>
    <Card sx={{ width: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn0.weddingwire.in/vendor/3413/3_2/320/jpg/file-1690229438599_15_303413-169022943977574.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Wedding By OOB
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Wedding By OOB is a wedding planning company based in the city of Udaipur. They mould all sorts of wedding places to build incredible events and settings for you to share and enjoy with family and friends. From doing the right decor to serving you with the most trustworthy services like furniture and strengthener.Wedding By OOB blends the most desirable classical and modern  to enjoy with your loved ones.
          </Typography>
        </CardContent>
            <CardActions>
            <Button size="large">REQUEST PRICING</Button>
            </CardActions>
      </CardActionArea>
    </Card>
    </div>

    </div>
    );
}