
const GOOGLE_API_KEY = "AIzaSyDzJjkxU7Jf7JGDW4sn69Uj45s3JCOXn94"
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY

export const SEARCH_SUGGESTION_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 25;

export const CHANNEL_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=channelId&key=" + GOOGLE_API_KEY

export const SEARCH_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=query&key=" + GOOGLE_API_KEY

export const COMMENT_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=vId&key=" + GOOGLE_API_KEY