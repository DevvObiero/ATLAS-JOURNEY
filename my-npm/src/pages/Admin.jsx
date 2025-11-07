import { useState } from "react";
import { auth, storage, db } from "../firebase";
import { signOut } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function Admin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonLink, setButtonLink] = useState("");
  const [image, setImage] = useState(null);

  const handlePost = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (image) {
      const imgRef = ref(storage, `posts/${image.name}`);
      await uploadBytes(imgRef, image);
      imageUrl = await getDownloadURL(imgRef);
    }

    await addDoc(collection(db, "posts"), {
      title,
      content,
      buttonText,
      buttonLink,
      imageUrl,
      createdAt: serverTimestamp(),
    });

    alert("Post published");
    setTitle("");
    setContent("");
    setButtonText("");
    setButtonLink("");
    setImage(null);
  };

  return (
    <section className="min-h-screen px-6 py-30 max-w-2xl mx-auto   text-gray-200 bg-[#051A23]">
      <div className="flex justify-between mb-8">
        <h1 className="text-2xl font-semibold" style={{ color: "#E8C5A8" }}>
          Admin Panel
        </h1>
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
          Publish Post
        </button>
      </form>
    </section>
  );
}

export default Admin;
