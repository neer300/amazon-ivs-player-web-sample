import React, { useRef, useState } from 'react';
import AmazonIVSPlayerComponent from './amazon-ivs-player-react-component';
import ToggleButton from './count';
import UrlBox from './url-box';
function App() {
  const urls = [
    'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8',
    'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.XFAcAcypUxQm.m3u8',
    'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.YtnrVcQbttF0.m3u8',
    'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.xhP3ExfcX8ON.m3u8',
    'https://d6hwdeiig07o4.cloudfront.net/ivs/956482054022/cTo5UpKS07do/2020-07-13T22-54-42.188Z/OgRXMLtq8M11/media/hls/master.m3u8'
  ];
  const [currentSrc, setCurrentSrc] = useState('https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.xhP3ExfcX8ON.m3u8');
  const [showPlayer, setShowPlayer] = useState(true);
  const vEl = useRef(null);
  const submitHandler = (url) => {
    setCurrentSrc(url);
  };
  const clickHandler = (show) => {
    setShowPlayer(show);
  }
  return (
    <div className="App">
      {showPlayer &&
        <React.Fragment>
          <AmazonIVSPlayerComponent video={vEl} src={currentSrc}>
            <video ref={vEl}
              autoPlay
              controls
              width="30%"
              height="30%"
            >
            </video>
          </AmazonIVSPlayerComponent>
          <UrlBox submitHandler={submitHandler}></UrlBox>
        </React.Fragment>
      }
      <ToggleButton show={false} onClick={clickHandler}></ToggleButton>
    </div>
  );
}

export default App;
