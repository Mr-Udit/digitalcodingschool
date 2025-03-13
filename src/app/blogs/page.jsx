import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';

const BlogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    snippet: "Discover what technologies will shape the web of tomorrow.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "JavaScript: The Language of the Web",
    snippet: "A deep dive into JavaScript and its ecosystem.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "JavaScript: The Language of the Web",
    snippet: "A deep dive into JavaScript and its ecosystem.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    title: "Building a Portfolio with Next.js",
    snippet: "Learn how to build a portfolio website using Next.js.",
    imageUrl: "https://via.placeholder.com/300",
  },
];

export default function Home() {
  return (
    <>
    <Header/>
    <div className="container">
      {/* Hero Section with custom animation */}
      <section className="blog-container">
        <h1 className="title">Welcome to My Blog</h1>
        <p className="subtitle">Stay updated with the latest in web development</p>
      </section>

      {/* Blog Posts */}
      <section className="blogSection">
        <h2 className="blogTitle">Latest Posts</h2>
        <div className="blogList">
          {BlogPosts.map((post) => (
            <div key={post.id} className="blogCard">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="blogImage"
              />
              <h3 className="blogCardTitle">{post.title}</h3>
              <p className="blogSnippet">{post.snippet}</p>
              <Link className='readmore' href={`/blog/${post.id}`}>
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}
