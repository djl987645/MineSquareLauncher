const { DistributionAPI } = require("helios-core/common");

const ConfigManager = require("./configmanager");

// Old WesterosCraft url.
// exports.REMOTE_DISTRO_URL = 'http://mc.westeroscraft.com/WesterosCraftLauncher/distribution.json'
exports.REMOTE_DISTRO_URL =
  "https://www.dropbox.com/scl/fi/0qpxczberow1sy7ziouk6/distribution.json?rlkey=zdgf7hle1zom0hd918gruud0n&st=18ouhc83&dl=1";

const api = new DistributionAPI(
  ConfigManager.getLauncherDirectory(),
  null, // Injected forcefully by the preloader.
  null, // Injected forcefully by the preloader.
  exports.REMOTE_DISTRO_URL,
  false
);

exports.DistroAPI = api;
