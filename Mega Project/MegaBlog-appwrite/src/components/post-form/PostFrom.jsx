import React from "react";
import { useCallback } from "react";
import { Button, Input, RTE, Select } from "..";
import { useNavigate } from "react-router-dom";
import appwriteService from "../../Appwrite/config";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form"; // hook that is used to add forms//

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
      const file = data.image[0] // if get image at 0 index use appwrite service to upload the file at of index 0 //
        ? appwriteService.uploadFile(data.image[0])
        : null;
      if (file) {
        appwriteService.deleteFile(data.featuredImage);
      }
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.id}`);
      }
      // use case of if not get the post//
      else {
        const file = await appwriteService.uploadFile(data.image[0]);
        if (file) {
          const fileId = file.$id;
          data.featuredImage = fileId;
          const dbPost = appwriteService.createPost({
            ...data,
            userId: userData.$id,
          });
          if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
          }
        }
      }
    }
  };

  return <div>Post-From</div>;
}

export default PostFrom;
