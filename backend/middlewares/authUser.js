import jwt from "jsonwebtoken";

//user authentication middleware

export const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({
        message: "Authorization denied",
        success: false,
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach userId directly to req object
    req.userId = decoded.id;

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
