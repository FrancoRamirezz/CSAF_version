import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material'
function Aboutpage() {
    return (

          <Card style={{ maxWidth: 800, margin: '40px auto', padding: '20px' }}>
            <CardContent>
              <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <Avatar
                    alt="Aboutpage"
                    src="/Users/franciscoramirez/Desktop/VirgoAI.SAAS/client/virgoai-app/public/Canabout.png" // Replace with your image path
                    style={{ width: 150, height: 150, margin: 'auto' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h5" gutterBottom>
                    VirgoAI BudBuddy
                  </Typography>
                  <Typography variant="body1">
                   CSAF mission to help other students learn the importance of cybersecurity
                  </Typography>
                </Grid>
              </Grid>
      
              <Typography variant="h6" style={{ marginTop: 20 }}>
                We started off as college kids, tasked with building an E Commerce project
              </Typography>
              <Typography variant="body1">
               
              </Typography>
            </CardContent>
          </Card>


);

};
export default About;
