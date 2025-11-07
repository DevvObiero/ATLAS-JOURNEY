import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setPosts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    load();
  }, []);

  return (
    <section className="min-h-screen px-6 md:px-12 py-16 bg-[#051A23] text-gray-300">
      <h1
        className="text-3xl md:text-4xl font-bold mb-12 manrope"
        style={{ color: "#E8C5A8" }}
      >
        Blog
      </h1>

      <div className="space-y-12 max-w-3xl mx-auto">
        {posts.map(post => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="block group cursor-pointer transform transition hover:scale-105 h-[100px] hover:shadow-lg"
          >
            <div className="overflow-hidden rounded-lg border border-[#E8C5A8]">
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:opacity-90 transition"
                />
              )}
            </div>

            <h2
              className="text-2xl md:text-3xl font-semibold mt-4 manrope group-hover:opacity-80 transition"
              style={{ color: "#E8C5A8" }}
            >
              {post.title}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Blog;
