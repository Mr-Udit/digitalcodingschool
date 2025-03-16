import {
  JavaCourse,
  PythonCourse,
  WebDevelopmentCourse,
} from "@/components/assects/constant";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default async function page({ params }) {
  let isUrl;
  let content;
  const { course } = await params;
  if (course === "java") {
    content = JavaCourse;
    isUrl = true;
  } else if (course === "python") {
    content = PythonCourse;
    isUrl = true;
  } else if (course === "web-development") {
    content = WebDevelopmentCourse;
    isUrl = true;
  } else {
    isUrl = false;
  }
  // console.log(
  //   ` the content is ${content.headings.map((a, key) => console.log(a.link))}`
  // );
  return (
    <>
      <Header />
      <div>
        {isUrl ? (
          <>
            <h1>{content.name}</h1>
            <div className="container">
              <div className="video">video here</div>
              <div className="headings">
                {content.headings.map((heading, key) => (
                  <button key={key}>
                    <Link href={heading.link}>{heading.name}</Link>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <h1>page not found</h1>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
