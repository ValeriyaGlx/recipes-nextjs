// getPostMetadata.js
import fs from 'fs';
import matter from 'gray-matter';

const getPostMetadata = () => {
  const folder = '_posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title || '',
      date: matterResult.data.date?.toISOString() || '',
      subtitle: matterResult.data.subtitle || '',
      author: matterResult.data.author || '',
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
};

export default getPostMetadata;