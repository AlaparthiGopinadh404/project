
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import AlarmIcon from '@mui/icons-material/Alarm';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Checkbox, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
// import NavigationIcon from '@mui/icons-material/Navigate';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export default function IconLabelButtons() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" color="error" endIcon={<SendIcon />}>
                Send
            </Button>
            <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
            </IconButton>
            <IconButton aria-label="fingerprint" color="success">
                <Fingerprint />
            </IconButton>
            <ButtonGroup variant='contained' aria-label="Disabled elevation buttons" disableElevation>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>Four</Button>

            </ButtonGroup>
            <Checkbox  {...label} default size="medium" color="secondary" />
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab color="secondary" arial-label="fav">
                    <FavoriteIcon />
                </Fab>
                {/* <Fab variant="extended" size="small" color="primary" aria-label="add">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Extended
                </Fab> */}
            </Box>
            <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <TextField value="gender"  label="Gender"/>

      </RadioGroup>
    </FormControl>

    
        </Stack>
    );
}

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import ButtonBase from '@mui/material/ButtonBase';
// import Typography from '@mui/material/Typography';

// const images = [
//   {
//     url: 'https://media.istockphoto.com/id/938158500/photo/breakfast-table.jpg?s=612x612&w=0&k=20&c=Y8xB6hfe4dSPNyNrPgzP7slHbKhWdEzG7YTk2WXu4lQ=',
//     title: 'Breakfast',
//     width: '40%',
//   },
//   {
//     url: 'https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=',
//     title: 'Burgers',
//     width: '30%',
//   },
//   {
//     url: 'https://www.shutterstock.com/image-photo/camera-260nw-610909205.jpg',
//     title: 'Camera',
//     width: '30%',
//   },
// ];

// const ImageButton = styled(ButtonBase)(({ theme }) => ({
//   position: 'relative',
//   height: 200,
//   [theme.breakpoints.down('sm')]: {
//     width: '100% !important', // Overrides inline-style
//     height: 100,
//   },
//   '&:hover, &.Mui-focusVisible': {
//     zIndex: 1,
//     '& .MuiImageBackdrop-root': {
//       opacity: 0.15,
//     },
//     '& .MuiImageMarked-root': {
//       opacity: 0,
//     },
//     '& .MuiTypography-root': {
//       border: '4px solid currentColor',
//     },
//   },
// }));

// const ImageSrc = styled('span')({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center 40%',
// });

// const Image = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: theme.palette.common.white,
// }));

// const ImageBackdrop = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundColor: theme.palette.common.black,
//   opacity: 0.4,
//   transition: theme.transitions.create('opacity'),
// }));

// const ImageMarked = styled('span')(({ theme }) => ({
//   height: 3,
//   width: 18,
//   backgroundColor: theme.palette.common.white,
//   position: 'absolute',
//   bottom: -2,
//   left: 'calc(50% - 9px)',
//   transition: theme.transitions.create('opacity'),
// }));

// export default function ButtonBases() {
//   return (
//     <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
//       {images.map((image) => (
//         <ImageButton
//           focusRipple
//           key={image.title}
//           style={{
//             width: image.width,
//           }}
//         >
//           <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
//           <ImageBackdrop className="MuiImageBackdrop-root" />
//           <Image>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               sx={{
//                 position: 'relative',
//                 p: 4,
//                 pt: 2,
//                 pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
//               }}
//             >
//               {image.title}
//               <ImageMarked className="MuiImageMarked-root" />
//             </Typography>
//           </Image>
//         </ImageButton>
//       ))}
//     </Box>
//   );
// }
