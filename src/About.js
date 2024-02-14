import React from "react";
const About = () =>{

return(

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
                   We wanted to teach other students the importance of CyberSercuity in E-commerce 
                  </Typography>
                </Grid>
              </Grid>
      
              <Typography variant="h6" style={{ marginTop: 20 }}>
                We started off as a college kids, who saw a problem and we wanted to find a solution to it
              </Typography>
              <Typography variant="body1">
                Thanks from the entire Missa CSAF team
              </Typography>
            </CardContent>
          </Card>



);

};
export default About;
