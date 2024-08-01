import express, {Request, Response} from "express";
import path from "path";
import {fileURLToPath} from "url";

// Convert __dirname and __filename for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, "../devblog-ui/build")));

// Catch-all handler for all other routes to support client-side routing
app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../devblog-ui/build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});