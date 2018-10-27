import Models from "./models";
import BlockUser from "./services/BlockUser";
import UnblockUser from "./services/UnblockUser";
import GetFollowersFor from "./services/GetFollowersFor";
import Unfollow from "./services/Unfollow";

const { InstagramUser, sequelize } = Models;

export interface Params {
  username: string;
}
async function run() {
  const currentUser = await InstagramUser.find({
    where: { username: "daggetoioioi" }
  });

  const userToUnfollow = await InstagramUser.findById(49);
  Unfollow.run({ currentUser, userToUnfollow });
}

run();
