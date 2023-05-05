import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../pages/Blog";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
export interface dataType {
  id: number;
  title: string;
  author: string;
  blog: string;
}

const BlogList = ({ uploadData }: { uploadData: {} }) => {
  const [data, setData] = useState<Array<dataType>>([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${baseUrl}posts`);
      const data = await res.data;
      setData(data);
    }
    getData();
  }, [uploadData]);

  return (
    <Box sx={{ width: "100%", minHeight: 200 }}>
      {data.map((each) => (
        <div
          key={Math.random() * Math.random()}
          style={{ border: "1px solid black" }}
        >
          <Link to={each.id.toString()} style={{ textDecoration: "none" }}>
            <h1>{each.title}</h1>
          </Link>
          <h3>
            <span style={{ fontSize: 16, fontWeight: 100 }}>Author:</span>{" "}
            {each.author}
          </h3>
          <p>Post Id: {each.id}</p>
        </div>
      ))}
    </Box>
  );
};

export default BlogList;
