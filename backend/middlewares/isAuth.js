import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
    console.log(req.user);
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

export { isAuth };
