
const GOOGLE_API_KEY = "AIzaSyBDH3L38jVAmVqlM6sTxc4RmXGkKaM5_DU"
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY

export const SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 25;

export const CHANNEL_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=channelId&key=" + GOOGLE_API_KEY

export const SEARCH_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=query&key=" + GOOGLE_API_KEY