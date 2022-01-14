"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static('build'));
app.post('/endpoint', (request, response) => {
    console.log('Server recieved request', request.body);
    response.send('OK');
});
app.listen(8000, () => console.log('Server listening on port 8000!'));
//# sourceMappingURL=index.js.map