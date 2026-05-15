import jwt from "jsonwebtoken";

let protect = async (req, res, next) => {

    try {

        let token = req.headers.authorization;

        if (!token) {

            return res.status(401).json({
                message: "No Token"
            });

        }

        token = token.split(" ")[1];

        let decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (error) {

        res.status(401).json({
            message: "Invalid Token"
        });

    }

};

export default protect;