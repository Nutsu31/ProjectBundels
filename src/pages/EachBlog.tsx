import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "./Blog";
import { dataType } from "../components/BlogBody/BlogList";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const EachBlog = () => {
  const [posts, setPosts] = useState<Array<dataType>>([]);
  const { id } = useParams();
  const [edit, setEdit] = useState(false);
  const eachPost = posts.find((post) => post.id.toString() === id);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${baseUrl}posts`);
      const data = await res.data;
      setPosts(data);
    }
    getData();
  }, [id]);

  // function that takes params id and makes request to delete this object
  const handleDelete = () => {
    axios({
      method: "DELETE",
      url: `${baseUrl}posts/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/blog");
  };

  const handleSave = () => {
    axios({
      method: "PATCH",
      url: `${baseUrl}posts/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        blog: text,
      },
    });
    navigate("/blog");
  };
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{ width: "400px", textAlign: "center", border: "1px solid black" }}
      >
        <h1>{eachPost?.title}</h1>
        <h2>
          <span style={{ fontSize: 14, fontWeight: 100 }}>Author:</span>
          {eachPost?.author}
        </h2>
        <h3>
          <span style={{ fontSize: 14, fontWeight: 100 }}>Post N:</span>{" "}
          {eachPost?.id}
        </h3>
        {edit ? (
          <>
            <textarea
              style={{ width: "100%", height: "400px" }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={handleSave}>Save</Button>
          </>
        ) : (
          <p>{eachPost?.blog}</p>
        )}
      </Box>
      <Box>
        <Button onClick={() => setEdit(!edit)}>
          <Edit />
        </Button>
        <Button onClick={handleDelete}>
          <Delete />
        </Button>
      </Box>
    </Box>
  );
};

export default EachBlog;
