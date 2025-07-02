import React from "react";
import { useState, useEffect } from "react";
import { Container, PostFrom } from "../components";
import appwriteService from "../Appwrite/Service";
import { useParams, useNavigate } from "react-router-dom";

function Editpost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (post) {
      appwriteService.getPost(slug).then(() => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostFrom post={post} />
      </Container>
    </div>
  ) : null;
}

export default Editpost;
