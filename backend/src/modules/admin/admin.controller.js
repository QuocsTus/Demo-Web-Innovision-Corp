const { ADMIN_SESSION_COOKIE } = require("../../config/constants");
const { env } = require("../../config/env");
const service = require("./admin.service");

function cookieOptions() {
  const isProduction = env.nodeEnv === "production";
  return {
    httpOnly: true,
    // Vercel frontend + Railway backend are cross-site in production.
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction,
    path: "/",
  };
}

async function login(req, res) {
  const username = req.body?.username;
  const password = req.body?.password;

  if (!service.isValidCredentials(username, password)) {
    return res.status(401).json({ ok: false, message: "Invalid username or password" });
  }

  res.cookie(ADMIN_SESSION_COOKIE, env.adminSessionSecret, {
    ...cookieOptions(),
    maxAge: 1000 * 60 * 60 * 24,
  });

  return res.json({ ok: true });
}

async function logout(_req, res) {
  res.cookie(ADMIN_SESSION_COOKIE, "", {
    ...cookieOptions(),
    maxAge: 0,
  });
  return res.json({ ok: true });
}

module.exports = { login, logout };
