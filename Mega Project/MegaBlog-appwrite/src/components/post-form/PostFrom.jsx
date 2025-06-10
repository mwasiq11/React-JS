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

  return <div></div>;
}

export default PostFrom;
