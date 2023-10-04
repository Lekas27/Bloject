import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const MediaCard = ({ title, content, author }) => (
  <Grid item xs={12} sm={6}>
    <Card
      sx={{
        width: "200px",
        height: "250px",
        borderRadius: "md",
        boxShadow: "lg",
        p: 2,
        backgroundColor: "#ffffff",
        color: "#2A446D",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardContent
        sx={{
          overflow: "hidden",
          height: "100%",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontSize: "16px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {content}
        </Typography>
        <Typography variant="body2">{author}</Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
        }}
      >
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
);
