function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "hitesh", url: "google.com" });
    }, 3000);
  });
}
async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData(); // waits here until resolved
    console.log("User Data:", userData);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
getUserData(); // Don't forget to call the function!

// Promise 1: Fetches post data — takes 2 seconds
function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post data fetched");
    }, 2000); // 2 second delay
  });
}
// Promise 2: Fetches comment data — takes 3 seconds
function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment data fetched");
    }, 3000); // 3 second delay
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data...");
    const [postData, commentData] = await Promise.all([
      fetchPostData(), // starts immediately ⚡
      fetchCommentData(), // also starts immediately ⚡
    ]);
    console.log(postData); // "Post data fetched"
    console.log(commentData); // "Comment data fetched"
    console.log("Fetch complete!");
  } catch (error) {
    console.log("Error fetching blog data:", error);
  }
}
getBlogData();