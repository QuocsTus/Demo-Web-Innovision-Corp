const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { env } = require("./config/env");
const { requireAdminSession } = require("./middleware/adminSession");
const { errorHandler } = require("./middleware/errorHandler");
const { blogsRouter } = require("./modules/blogs/blogs.routes");
const { adminBlogsRouter } = require("./modules/blogs/blogs.admin.routes");
const { portfolioRouter } = require("./modules/portfolio/portfolio.routes");
const { adminPortfolioRouter } = require("./modules/portfolio/portfolio.admin.routes");
const { solutionsRouter } = require("./modules/solutions/solutions.routes");
const { adminSolutionsRouter } = require("./modules/solutions/solutions.admin.routes");
const { adminAuthRouter } = require("./modules/admin/admin.routes");

const app = express();
const allowedOrigins = new Set(env.frontendOrigins);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, true);
        return;
      }

      if (allowedOrigins.has(origin)) {
        callback(null, true);
        return;
      }

      if (
        env.allowVercelPreviewOrigins &&
        origin.startsWith("https://") &&
        origin.endsWith(".vercel.app")
      ) {
        callback(null, true);
        return;
      }

      callback(new Error("Origin not allowed by CORS"));
    },
    credentials: true,
  }),
);
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "backend" });
});

app.use("/api/blogs", blogsRouter);
app.use("/api/portfolio", portfolioRouter);
app.use("/api/solutions", solutionsRouter);
app.use("/api/admin", adminAuthRouter);
app.use("/api/admin/blogs", requireAdminSession, adminBlogsRouter);
app.use("/api/admin/portfolio", requireAdminSession, adminPortfolioRouter);
app.use("/api/admin/solutions", requireAdminSession, adminSolutionsRouter);

app.use(errorHandler);

module.exports = app;
