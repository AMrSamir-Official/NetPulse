const API_KEY = 'AIzaSyAB9dG_zzrdvTcfVFlGbkZ_GQjPhqPE1yQ';
const CHANNEL_USERNAME = '@ElzeroWebSchool';

fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings&forUsername=${CHANNEL_USERNAME.replace('@', '')}&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        if (data.items.length > 0) {
            const channel = data.items[0];

            // Extracting data
            const channelName = channel.snippet.title;
            const about = channel.snippet.description;
            const profilePhoto = channel.snippet.thumbnails.high.url;
            const backgroundImage = channel.brandingSettings.image.bannerExternalUrl;
            const socialMediaLinks = channel.brandingSettings.promotionalCampaigns && channel.brandingSettings.promotionalCampaigns.externalUrls;

            // Logging the data to console
            console.log('Channel Name:', channelName);
            console.log('About:', about);
            console.log('Profile Photo URL:', profilePhoto);
            console.log('Background Image URL:', backgroundImage);
            console.log('Social Media Links:', socialMediaLinks);
        } else {
            console.log('No channel found');
        }
    })
    .catch(error => {
        console.error('Error fetching channel details:', error);
    });
