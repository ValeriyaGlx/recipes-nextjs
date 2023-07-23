// pages/posts/[category]/[slug].js
import { useRouter } from "next/router";
import React from "react";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "../../../utils/getPostMetadata";
import getPostData from "../../../utils/getPostData";
import Link from "next/link";
import DateFormatter from "../../../utils/dateFormatter";

const Post = ({ postMetadata, content }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link href="/">
        Вернуться на главную
      </Link>
      <h2>{postMetadata.title}</h2>
      <p><DateFormatter dateString={postMetadata.date}/></p>
      <p>{postMetadata.subtitle}</p>
      <p>{postMetadata.author}</p>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export async function getStaticPaths() {
  const posts = getPostMetadata();
  const paths = posts.map((post) => ({
    params: { category: post.category, slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { category, slug } = params;
  const { content, postMetadata } = await getPostData(category, slug);

  return {
    props: {
      postMetadata,
      content,
    },
    revalidate: 1,
  };
}

export default Post;