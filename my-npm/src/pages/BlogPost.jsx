import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const load = async () => {
      const snap = await getDoc(doc(db, "posts", id));
      if (snap.exists()) setPost(snap.data());
    };
    load();
  }, [id]);

  if (!post) return null;

  return (
    <section className="min-h-screen px-6 md:px-12 py-16 text-gray-300 max-w-3xl mx-auto">
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt=""
          className="w-full h-[420px] object-cover rounded-md mb-8"
        />
      )}

      <h1
        className="text-3xl md:text-4xl font-bold manrope mb-6"
        style={{ color: "#E8C5A8" }}
      >
        {post.title}
      </h1>

      <p className="text-gray-400 leading-relaxed whitespace-pre-line">
        {post.content}
      </p>

      {post.buttonText && post.buttonLink && (
        <a
          href={post.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-[#E8C5A8] text-[#051A23] font-medium rounded-md hover:opacity-90 transition"
        >
          {post.buttonText}
        </a>
      )}
    </section>
  );
}

export default BlogPost;
