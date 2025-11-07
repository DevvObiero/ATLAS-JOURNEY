import { useState, useEffect } from "react";
import { auth, storage, db } from "../firebase";
import { signOut } from "firebase/auth";
import { addDoc, collection, serverTimestamp, onSnapshot, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function Admin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonLink, setButtonLink] = useState("");
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (image) {
      const imgRef = ref(storage, `posts/${image.name}`);
      await uploadBytes(imgRef, image);
      imageUrl = await getDownloadURL(imgRef);
    }

    if (editingPostId) {
      // Update existing post
      const docRef = doc(db, "posts", editingPostId);
      await updateDoc(docRef, { title, content, buttonText, buttonLink, imageUrl });
      setEditingPostId(null);
      alert("Post updated");
    } else {
      // Create new post
      await addDoc(collection(db, "posts"), {
        title,
        content,
        buttonText,
        buttonLink,
        imageUrl,
        createdAt: serverTimestamp(),
      });
      alert("Post published");
    }

    // Clear form
    setTitle("");
    setContent("");
    setButtonText("");
    setButtonLink("");
    setImage(null);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setButtonText(post.buttonText || "");
    setButtonLink(post.buttonLink || "");
    setEditingPostId(post.id);
  };

  return (
    <section className="min-h-screen px-6 py-30 max-w-2xl mx-auto text-gray-200 bg-[#051A23]">
      <div className="flex justify-between mb-8">
        <h1 className="text-2xl font-semibold" style={{ color: "#E8C5A8" }}>Admin Panel</h1>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>

      <form onSubmit={handlePost} className="space-y-6">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 bg-[#0B2A36] border border-[#E8C5A8] rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write content here..."
          className="w-full p-3 bg-[#0B2A36] border border-[#E8C5A8] rounded h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <input
          type="text"
          placeholder="Button text (optional)"
          className="w-full p-3 bg-[#0B2A36] border border-[#E8C5A8] rounded"
          value={buttonText}
          onChange={(e) => setButtonText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Button link (optional)"
          className="w-full p-3 bg-[#0B2A36] border border-[#E8C5A8] rounded"
          value={buttonLink}
          onChange={(e) => setButtonLink(e.target.value)}
        />
        <button
          className="px-6 py-3 bg-[#E8C5A8] text-[#051A23] font-medium rounded-md hover:opacity-90 transition"
          type="submit"
        >
          {editingPostId ? "Update Post" : "Publish Post"}
        </button>
      </form>

      <div className="mt-12 space-y-6">
        <h2 className="text-xl font-semibold" style={{ color: "#E8C5A8" }}>Your Posts</h2>
        {posts.map((post) => (
          <div key={post.id} className="p-4 border border-[#E8C5A8] rounded bg-[#0B2A36]">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-sm opacity-80">{post.content.slice(0, 80)}...</p>
            <div className="flex gap-4 mt-4">
              <button onClick={() => handleEdit(post)} className="px-4 py-2 bg-yellow-500 text-[#051A23] rounded">
                Edit
              </button>
              <button onClick={() => handleDelete(post.id)} className="px-4 py-2 bg-red-500 text-white rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Admin;
