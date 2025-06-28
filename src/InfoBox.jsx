import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let HOT_URL = "https://images.unsplash.com/photo-1433477077279-9354d2d72f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1bnJpc2V8ZW58MHx8MHx8fDA%3D";
    let COLD_URL = "https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=612x612&w=0&k=20&c=Dp3peie2t-jdLEmqe4W-DD09GACu2Cr-JjHHeB6rpBc=";
    let RAIN_URL = "https://images.unsplash.com/photo-1619260584294-8a4e63f5ade5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxyYWlufGVufDB8fDB8fHww";

  return (
    <div className="Informat">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80
            ? RAIN_URL
            : info.temp > 15
            ? HOT_URL
            :COLD_URL
          }
         title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {
            info.humidity > 80
            ? <ThunderstormIcon/>
            : info.temp > 15
            ? <WbSunnyIcon/>
            :<AcUnitIcon/>
          }

          </Typography>
          <Typography variant="body2" color="text.secondary">
            Temperature = {info.temp}&deg;C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Humidity = {info.humidity}%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Min Temp = {info.tempMin}&deg;C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Max Temp = {info.tempMax}&deg;C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The weather can be described as <i>{info.weather}</i> & feels like {info.feelsLike}&deg;C
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
