const express = require('express');
const basicAuth = require('express-basic-auth')
const path = require('path');
const fs = require('fs');
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

// Access local files in the "/file" folder
app.get("/file/:filename", (req, res) => {
	const filename = req.params.filename;
	const filePath = path.join(__dirname, "file", filename);
	if (fs.existsSync(filePath)) {
		res.setHeader("Content-Type", "application/pdf");
		res.setHeader("Content-Disposition", 'inline; filename="' + filename + '"');
		res.sendFile(filePath, (err) => {
			if (err) {
				res.status(404).send(`Could not download file. Error: ${err}`);
			}
		});
	} else {
		res.status(404).send(`File not found - [${filename}]`);
	}
});

app.listen(port, () => console.log(`Express app running on port ${port}!`));
