const User = require("../models/UserModel");

module.exports.addToLikedMovies = async (req, res) => {
  console.log("3");
  try {
    console.log("heloodjskjfh");
    const { emai, data } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => (id = data.id));
      if (!movieAlreadyLike) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );
      } else return res.json({ msg: "Movie is Already Liked" });
    } else await User.create({ email, likedMovies: [data] });
    return res.json({ msg: "Movie added to liked movies SUCCESFULLY" });
  } catch (error) {
    return res.json({ msg: "Error Adding Movies" });
  }
};
