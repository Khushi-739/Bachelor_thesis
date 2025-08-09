// file: src/index.ts
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
const app = express();
const PORT = process.env.PORT || 3001;
// --- START: CONFIGURE CORS FROM .env ---
const corsOptions = {
    origin: process.env.FRONTEND_ORIGIN, // Read the allowed origin from .env
};
app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
// START: ADD THIS DEBUGGING MIDDLEWARE
app.use('/api/auth', (req, res, next) => {
    console.log(`Request received for: ${req.method} ${req.originalUrl}`);
    next();
});
// END: ADD THIS DEBUGGING MIDDLEWARE
// Tell the app to use our authRoutes for any path that starts with /api/auth
app.use('/api/auth', authRoutes);
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the Railway Management System Backend!' });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map