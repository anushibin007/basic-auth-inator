const express = require('express');
const basicAuth = require('express-basic-auth')
const app = express();
const port = 3000;

app.use(basicAuth({
    users: { 'admin': 'admin' },
    challenge: true,
}))

app.get("/", (req, res) => {
    const secrets = [
        {
            id: 1,
            name: "Secret 1",
        },
        {
            id: 2,
            name: "Secret",
        }
    ];

    res.json(secrets);
});

app.listen(port, () => console.log(`Express app running on port ${port}!`));