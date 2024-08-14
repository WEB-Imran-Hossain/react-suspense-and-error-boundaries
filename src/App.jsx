import { Suspense, useState } from "react";
import PostSelector from "./components/PostSelector";
import Comments from "./components/Comments";

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold">React Suspense and Error Boundaries</h1>
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <PostSelector onSelectPost={handleSelectPost} />
        </Suspense>
        {selectedPostId && <Comments postId={selectedPostId} />}
      </div>
    </div>
  );
}

export default App;
