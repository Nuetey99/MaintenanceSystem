"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const database_1 = require("./database");
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, database_1.connectDB)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use('/api/auth', auth_routes_1.default);
