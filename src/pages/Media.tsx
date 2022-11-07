import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import { storage } from '../firebase/firebaseConfig.js';

function Media() {

  const [fileList, setFileList] = useState <any>([]);
  const fileListRef = ref(storage, "media/");

  useEffect(() => {
    listAll(fileListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileList((prev: Array<any>) => [...prev, url]);
        });
      });
    });
    console.log(fileList);
  }, []);


  return (
    <main className="row mx-auto">
      <h1 className="my-12 text-4xl text-center">Media.</h1>
      {/* <Gallery images={fileList} /> */}
    </main>
  );
}

export default Media;
