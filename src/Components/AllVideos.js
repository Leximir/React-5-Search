import VIDEOS from "./../videos.json";

const AllVideos = () => {
    return (
            VIDEOS.map(videoObject => (
                <a href={videoObject.url} target="_blank">
                    <img src={videoObject.cover} alt="" width="300px"/>
                    <p>{videoObject.title}</p>
                </a>
            ))
    );
}

export default AllVideos;