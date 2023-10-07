import { useEffect, useState } from "react";
import { blogService } from "../../service/blogs";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";

const { getBlog, deleteBlog, editBlog } = blogService;

export const SingleBlog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const data = await getBlog(id);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => await fetchData())();
  }, []);

  console.log(data);

  return (
    <Container maxWidth="full" className="relative mx-4">
      <Typography variant="h4" className="mb-4 block">
        {data?.title}
      </Typography>
      <Typography variant="p" className="mb-4 block">
        {data?.content}
      </Typography>
      <Typography variant="p" className="mb-4 block">
        Created at: {data?.date_created}
      </Typography>

      <Typography variant="p" className="mb-4 block">
        Rate: {data?.average_rate}
      </Typography>
    </Container>
  );
};
