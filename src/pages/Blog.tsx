import { useForm } from "react-hook-form";
import BlogList from "../components/BlogBody/BlogList";
import WriteBlog from "../components/BlogBody/WriteBlog";
import axios from "axios";
import { useState } from "react";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

export const baseUrl = "http://localhost:4000/";

const Blog = () => {
  const { register, handleSubmit, reset } = useForm();
  const [uploadData, setUploadData] = useState({});
  const [addNewPost, setAddNewPost] = useState(false);

  const onSubmit = handleSubmit((data) => {
    setUploadData(data);
    axios({
      method: "POST",
      url: `${baseUrl}posts`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id: Date.now(),
        author: data.author,
        title: data.title,
        blog: data.blog,
      },
    });

    reset({ author: "", blog: "", title: "" });
  });
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "ButtonFace",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <Button variant="contained" onClick={() => setAddNewPost(!addNewPost)}>
        <Add /> Add New Blog
      </Button>
      <BlogList uploadData={uploadData} />
      {addNewPost ? (
        <WriteBlog register={register} onSubmit={onSubmit} />
      ) : null}
    </div>
  );
};

export default Blog;
