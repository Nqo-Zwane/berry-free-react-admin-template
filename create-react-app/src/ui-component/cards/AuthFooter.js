import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="https://manqoba-zwane.co.za/" target="_blank" underline="hover">
      Made with love by Manqoba
    </Typography>
     <Typography variant="subtitle2" component={Link} href="" target="_blank" underline="hover">
      &copy; Zurisoft
    </Typography> 
  </Stack>
);

export default AuthFooter; 
