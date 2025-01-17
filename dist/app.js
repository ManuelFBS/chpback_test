"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const test_routes_1 = __importDefault(require("./routes/test.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Settings...
app.set('port', process.env.PORT || 8585 || 3000);
// Middlewares...
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Routes...
app.use('/api/test', test_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map