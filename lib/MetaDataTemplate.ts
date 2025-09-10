import { APP } from "./App";
import type { Metadata } from "next";

export interface Data {
  meta : {
    title : string;
    desc : string;
  },
  path : string;
  image : {
    path : string,
    alt : string
  }
}

export default  function MetadataTemplate({data}: {
  data : Data;
}):Metadata {

  return {
    title: data.meta.title,
    description: data.meta.desc,
    alternates: {
      canonical: `${APP.url}${data.path}`,
    },
    openGraph: {
      url: `${APP.url}${data.path}`,
      title: data.meta.title,
      images: [{url : `${APP.url}${data.image.path}`, alt : data.image.alt}],
      description: data.meta.desc,
      type: "website",
      countryName: "United Arab Emairtes",
      emails: ["samana.movers@gmail.com"],
      phoneNumbers: [APP.phone],
      siteName: APP.name,
    },
    twitter: {
      card: "summary_large_image",
      creator: APP.name,
    },
  };
}
