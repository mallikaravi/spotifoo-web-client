// @ts-nocheck
import React from "react";
import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as Play } from "../assets/icons/play.svg";
import { ReactComponent as Pause } from "../assets/icons/pause.svg";
import * as C from "../styles/Footer";

import { AppService } from "../services/app.service";
import NOIMG from "../assets/picture-no-album.png";

type Props = {
  selectedSong: string | undefined;
};

export const Footer = ({ selectedSong }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<string>('1')

  const audioTag = useRef(null);
  const progressBar = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (selectedSong !== '' && selectedSong !== undefined) {
      if (isPlaying) {
        audioTag.current.play()
        animationRef.current = requestAnimationFrame(whilePlaying)
        audioTag.current.volume = volume
        
        audioTag.current.muted = false
        
        const interval = setInterval(() => {
          const seconds = Math.floor(audioTag.current.duration)
          setDuration(seconds)
          
        }, 1000)
        
        setInterval(() => {
          if (duration > 0 || duration !== undefined) {
            clearInterval(interval)
          }
        }, 1100)
        
        console.log(audioTag)
      } else {
        audioTag.current.pause()
        audioTag.current.volume = volume
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [[]])

  const calculateDuration = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const newMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const newSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${newMinutes}:${newSeconds}`;
  };

  const whilePlaying = () => {
    progressBar.current.value = audioTag?.current?.currentTime;
    animationRef.current = requestAnimationFrame(whilePlaying);
    changeCurrentTime();
  };

  const changeRange = () => {
    audioTag.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    setCurrentTime(progressBar.current.value);
  };

  // Fetch all the songs
  const [songs, setSongs] = useState<any[]>([]);
  const appService = new AppService();
  useEffect(() => {
    const getAllSongs = async () => {
      const songs = await appService.getAllSongs();
      setSongs(songs);
    };
    getAllSongs();
  }, []);

  // replace image function
  const replaceImage = (event: any) => {
    event.target.src = NOIMG;
  };

  let songInfo = (
    <div className="music" key="key">
      <img src={NOIMG} />
      <div>
        <h1>None</h1>
        <h3>None</h3>
      </div>
    </div>
  );
  songs.forEach(function (song) {
    if (song.id != undefined && selectedSong !== undefined && Number(song.id) == Number(selectedSong)) {
      songInfo = (
        <div className="music" key={song.id}>
          <>
            <img src={song.pathToAlbum !== undefined ? song.pathToAlbum : NOIMG}  onError={(event) => replaceImage(event)} />
            <div>
              <h1>{song.title}</h1>
              <h3>{song.artist}</h3>
            </div>
          </>
          <audio src={song.pathToMusic} ref={audioTag} />
        </div>
      )
    }
  }
  )
  return (
    <>
      <footer className="footer fixed-bottom ">
        <C.Container>
          <div className="musicDiv">{songInfo}</div>
          <div className="player">
            <div className="inputButtons">
              <div className="buttons">
                <button
                  className='playPause'
                  onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? <Pause width="2rem" fill="white" className="menuIcon" /> : <Play width="2rem" fill="white" className="menuIcon" />}
                </button>
              </div>
              <div className="progressBar">
                <p className="PcurrentTime">{calculateDuration(currentTime)}</p>
                <input
                  type="range"
                  className="currentProgress"
                  defaultValue="0"
                  ref={progressBar}
                  onChange={changeRange}
                />

                <p className="Pduration">
                  {duration && !isNaN(duration) && calculateDuration(duration)}
                </p>
              </div>
            </div>
          </div>
        </C.Container>
      </footer>
    </>
  );
};
