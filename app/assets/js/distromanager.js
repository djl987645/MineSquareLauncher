const { DistributionAPI } = require("helios-core/common");

const ConfigManager = require("./configmanager");

// Old WesterosCraft url.
// exports.REMOTE_DISTRO_URL = 'http://mc.westeroscraft.com/WesterosCraftLauncher/distribution.json'
exports.REMOTE_DISTRO_URL =
  "https://www.dropbox.com/scl/fi/21k62sawsf0ba6uj5xrv6/distribution.json?rlkey=w926sg8ayuyf23xmjygkp06az&st=o0jd66ii&dl=0";

const api = new DistributionAPI(
  ConfigManager.getLauncherDirectory(),
  null, // Injected forcefully by the preloader.
  null, // Injected forcefully by the preloader.
  exports.REMOTE_DISTRO_URL,
  false
);

exports.DistroAPI = api;
