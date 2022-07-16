const PostSignUp = async (body) => {
  console.log("fetch started");

  //   const location = window.location.hostname;
  //   console.log("location: " + location);
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  console.dir(body);
  try {
    const formResponse = await fetch(
      "https://tlancer.herokuapp.com/api/signup",
      settings
    );
    if (!formResponse.ok) {
      throw new Error("error during submission");
    } else {
      const data = await formResponse.json();
      console.dir(data);
    }
  } catch (e) {
    console.log("error: " + e);
  }
};
export default PostSignUp;
