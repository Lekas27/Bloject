import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const MediaCard = ({ id, title, content, actionButtons }) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card
      style={{
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
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 4,
            fontSize: "14px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {content}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
        }}
      >
        <Button size="small">
          <Link to={`/blogs/${id}`}>Learn More</Link>
        </Button>
        {actionButtons}
      </CardActions>
    </Card>
  </Grid>
);
