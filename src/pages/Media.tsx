import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import MediaImage from "../components/MediaImage.js";
import { storage } from "../firebase/firebaseConfig.js";
import { v4 } from "uuid";
import Skeleton from "@mui/material/Skeleton";

function Media() {
  const [fileList, setFileList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fileListRef = ref(storage, "media/");

  useEffect(() => {
    listAll(fileListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileList((prev: Array<any>) => [...prev, url]);
          setLoading(false);
        });
      });
    });
  }, []);

  return (
    <main className="row mx-auto">
      <h1 className="my-12 text-4xl text-center">Media.</h1>
      <section className="flex flex-wrap gap-8 items-center justify-center mb-12">
      {fileList.slice(0,50).map((url: any) => {
        return (
          <MediaImage key={url + v4()} url={url} />
        )
      })}
      </section>

      <section className="mb-12">
        <h6 className="mt-12 mb-6 text-2xl text-center">Want to be featured on this page?</h6>
        <p className="text-center">Email your photos wearing Roaming gear to: media@roaming.com</p>
      </section>
    </main>
  );
}

export default Media;
