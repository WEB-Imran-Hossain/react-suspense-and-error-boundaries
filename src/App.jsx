import { Suspense, useState } from "react";
import PostSelector from "./components/PostSelector";
import Comments from "./components/Comments";

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value);
  };
  return (
    <div className="w-[80vw] mx-auto flex flex-col items-center mt-40">
      <h1 className="text-2xl font-bold">React Suspense and Error Boundaries</h1>
      <div>
        <Suspense fallback={<h1>Loading posts...</h1>}>
          <PostSelector onSelectPost={handleSelectPost} />
        </Suspense>
        {selectedPostId && <Suspense fallback={<h1>Loading comments...</h1>}>
                <Comments postId={selectedPostId} />
              </Suspense>}
      </div>
    </div>
  );
}

export default App;
