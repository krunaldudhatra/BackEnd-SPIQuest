// middleware/checkAdmin.js
export const checkAdmin = (req, res, next) => {
  const email = req.header("X-Admin-Email");
  const password = req.header("X-Admin-Password");

  if (!email || !password) {
    return res.status(401).json({ message: "Admin credentials required" });
  }

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(403).json({ message: "Invalid admin credentials" });
  }

  next();
};
