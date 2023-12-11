const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/getVideo', async (req, res) => {
  try {
    const videoId = req.body.videoId;
    const apiKey = 'AIzaSyAYqNEhbPW3mX6dG9ZPJBTj3u49mo7Dv3g'; 

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
    );

    const videoDetails = response.data.items[0].snippet;
    res.json(videoDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
