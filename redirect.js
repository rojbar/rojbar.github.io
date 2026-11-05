// Demos once served under rojbar.com/<repo>/ moved with their repositories to the organization.
const DEMOS_HOST = "https://templaterojbar.github.io";
const MOVED_DEMOS = ["caldep-solver", "chicken-rescue", "Elementary-cellular-automaton"];
const PROFILE_URL = "https://www.rojbar.online/";

const firstSegment = window.location.pathname.split("/")[1] ?? "";
const demo = MOVED_DEMOS.find((name) => name.toLowerCase() === firstSegment.toLowerCase());
const target = demo === undefined ? PROFILE_URL : `${DEMOS_HOST}${window.location.pathname.replace(/^\/[^/]+/, `/${demo}`)}`;

window.location.replace(target);
