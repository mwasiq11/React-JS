import React from "react";
import { useCallback } from "react";
import { Button, Input, RTE, Select } from "..";
import { useNavigate } from "react-router-dom";
import appwriteService from "../../Appwrite/config";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function PostFrom({ post }) {
  const { register, handleSubmit, watch, getValues, setValue, control } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? appwriteService.uploadFile(data.image[0])
        : null;
      if (file) {
        appwriteService.deleteFile(data.featuredImage);
      }
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
        if(dbPost) {
          navigate(`/post/${dbPost.id}`);
        },
      });
    }
  };

  return <div>Post From</div>;
}

export default PostFrom;
