import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
   AudioSquareBold
   , Backward10SecondsBold
   , Backward15SecondsBold
   , Backward5SecondsBold
   , BackwardBold
   , CameraSlashBold
   , CameraBold
   , DevicesBold
   , Forward10SecondsBold
   , Forward15SecondsBold
   , Forward5SecondsBold
   , ForwardBold
   , GalleryAddBold
   , GalleryEditBold
   , GalleryExportBold
   , GalleryFavoriteBold
   , GalleryImportBold
   , GalleryRemoveBold
   , GallerySlashBold
   , GalleryTickBold
   , GalleryBold
   , ImageBold
   , MaximizeCircleBold
   , Microphone2Bold
   , MicrophoneSlash1Bold
   , MicrophoneSlashBold
   , MicrophoneBold
   , MiniMusicSqaureBold
   , MusicCircleBold
   , MusicDashboardBold
   , MusicFilterBold
   , MusicLibrary2Bold
   , MusicPlaylistBold
   , MusicSquareAddBold
   , MusicSquareRemoveBold
   , MusicSquareSearchBold
   , MusicSquareBold
   , MusicnoteBold
   , MusicBold
   , NextBold
   , NoteSquareBold
   , PauseCircleBold
   , PauseBold
   , PlayAddBold
   , PlayCircleBold
   , PlayCricleBold
   , PlayRemoveBold
   , PlayBold
   , PreviousBold
   , RadioBold
   , RecordCircleBold
   , RecordBold
   , RepeateMusicBold
   , RepeateOneBold
   , ScissorBold
   , ScreenmirroringBold
   , ShuffleBold
   , StopCircleBold
   , StopBold
   , SubtitleBold
   , VideoAddBold
   , VideoCircleBold
   , VideoHorizontalBold
   , VideoOctagonBold
   , VideoPlayBold
   , VideoRemoveBold
   , VideoSlashBold
   , VideoSquareBold
   , VideoTickBold
   , VideoTimeBold
   , VideoVerticalBold
   , VideoBold
   , VoiceCricleBold
   , VoiceSquareBold
   , VolumeCrossBold
   , VolumeHighBold
   , VolumeLow1Bold
   , VolumeLowBold
   , VolumeMuteBold
   , VolumeSlashBold
   , VolumeUpBold
   , AudioSquareOutlined
   , Backward10SecondsOutlined
   , Backward15SecondsOutlined
   , Backward5SecondsOutlined
   , BackwardOutlined
   , CameraSlashOutlined
   , CameraOutlined
   , DevicesOutlined
   , Forward10SecondsOutlined
   , Forward15SecondsOutlined
   , Forward5SecondsOutlined
   , ForwardOutlined
   , GalleryAddOutlined
   , GalleryEditOutlined
   , GalleryExportOutlined
   , GalleryFavoriteOutlined
   , GalleryImportOutlined
   , GalleryRemoveOutlined
   , GallerySlashOutlined
   , GalleryTickOutlined
   , GalleryOutlined
   , ImageOutlined
   , MaximizeCircleOutlined
   , Microphone2Outlined
   , MicrophoneSlash1Outlined
   , MicrophoneSlashOutlined
   , MicrophoneOutlined
   , MiniMusicSqaureOutlined
   , MusicCircleOutlined
   , MusicDashboardOutlined
   , MusicFilterOutlined
   , MusicLibrary2Outlined
   , MusicPlaylistOutlined
   , MusicSquareAddOutlined
   , MusicSquareRemoveOutlined
   , MusicSquareSearchOutlined
   , MusicSquareOutlined
   , MusicnoteOutlined
   , MusicOutlined
   , NextOutlined
   , NoteSquareOutlined
   , PauseCircleOutlined
   , PauseOutlined
   , PlayAddOutlined
   , PlayCircleOutlined
   , PlayCricleOutlined
   , PlayRemoveOutlined
   , PlayOutlined
   , PreviousOutlined
   , RadioOutlined
   , RecordCircleOutlined
   , RecordOutlined,
   RepeateMusicOutlined,
   RepeateOneOutlined
   ,ScissorOutlined
   ,ScreenmirroringOutlined
   ,ShuffleOutlined
   ,StopCircleOutlined
   ,StopOutlined
   ,SubtitleOutlined
   ,VideoAddOutlined
   ,VideoCircleOutlined
   ,VideoHorizontalOutlined
   ,VideoOctagonOutlined
   ,VideoPlayOutlined
   ,VideoRemoveOutlined
   ,VideoSlashOutlined
   ,VideoSquareOutlined
   ,VideoTickOutlined
  , VideoVerticalOutlined
  ,VideoTimeOutlined
  ,VideoOutlined
  ,VoiceCricleOutlined
  ,VoiceSquareOutlined
  ,VolumeCrossOutlined
  ,VolumeHighOutlined
  ,VolumeLow1Outlined
  ,VolumeLowOutlined
  ,VolumeMuteOutlined
  ,VolumeSlashOutlined
 , VolumeUpOutlined
} from "rutvik-react-icon";

export const Video_audio = () => {
  const [copied, setcopied] = useState(false);

  const video_audio_bold =  [
    { icon: <AudioSquareBold/>, icon_name: 'AudioSquareBold' },
    {
      icon: <Backward10SecondsBold/>,
      icon_name: 'Backward10SecondsBold'
    },
    {
      icon: <Backward15SecondsBold/>,
      icon_name: 'Backward15SecondsBold'
    },
    {
      icon: <Backward5SecondsBold/>,
      icon_name: 'Backward5SecondsBold'
    },
    { icon: <BackwardBold/>, icon_name: 'BackwardBold' },
    { icon: <CameraSlashBold/>, icon_name: 'CameraSlashBold' },
    { icon: <CameraBold/>, icon_name: 'CameraBold' },
    { icon: <DevicesBold/>, icon_name: 'DevicesBold' },
    {
      icon: <Forward10SecondsBold/>,
      icon_name: 'Forward10SecondsBold'
    },
    {
      icon: <Forward15SecondsBold/>,
      icon_name: 'Forward15SecondsBold'
    },
    { icon: <Forward5SecondsBold/>, icon_name: 'Forward5SecondsBold' },
    { icon: <ForwardBold/>, icon_name: 'ForwardBold' },
    { icon: <GalleryAddBold/>, icon_name: 'GalleryAddBold' },
    { icon: <GalleryEditBold/>, icon_name: 'GalleryEditBold' },
    { icon: <GalleryExportBold/>, icon_name: 'GalleryExportBold' },
    { icon: <GalleryFavoriteBold/>, icon_name: 'GalleryFavoriteBold' },
    { icon: <GalleryImportBold/>, icon_name: 'GalleryImportBold' },
    { icon: <GalleryRemoveBold/>, icon_name: 'GalleryRemoveBold' },
    { icon: <GallerySlashBold/>, icon_name: 'GallerySlashBold' },
    { icon: <GalleryTickBold/>, icon_name: 'GalleryTickBold' },
    { icon: <GalleryBold/>, icon_name: 'GalleryBold' },
    { icon: <ImageBold/>, icon_name: 'ImageBold' },
    { icon: <MaximizeCircleBold/>, icon_name: 'MaximizeCircleBold' },
    { icon: <Microphone2Bold/>, icon_name: 'Microphone2Bold' },
    {
      icon: <MicrophoneSlash1Bold/>,
      icon_name: 'MicrophoneSlash1Bold'
    },
    { icon: <MicrophoneSlashBold/>, icon_name: 'MicrophoneSlashBold' },
    { icon: <MicrophoneBold/>, icon_name: 'MicrophoneBold' },
    { icon: <MiniMusicSqaureBold/>, icon_name: 'MiniMusicSqaureBold' },
    { icon: <MusicCircleBold/>, icon_name: 'MusicCircleBold' },
    { icon: <MusicDashboardBold/>, icon_name: 'MusicDashboardBold' },
    { icon: <MusicFilterBold/>, icon_name: 'MusicFilterBold' },
    { icon: <MusicLibrary2Bold/>, icon_name: 'MusicLibrary2Bold' },
    { icon: <MusicPlaylistBold/>, icon_name: 'MusicPlaylistBold' },
    { icon: <MusicSquareAddBold/>, icon_name: 'MusicSquareAddBold' },
    {
      icon: <MusicSquareRemoveBold/>,
      icon_name: 'MusicSquareRemoveBold'
    },
    {
      icon: <MusicSquareSearchBold/>,
      icon_name: 'MusicSquareSearchBold'
    },
    { icon: <MusicSquareBold/>, icon_name: 'MusicSquareBold' },
    { icon: <MusicnoteBold/>, icon_name: 'MusicnoteBold' },
    { icon: <MusicBold/>, icon_name: 'MusicBold' },
    // { icon: <NextBold/>, icon_name: 'NextBold' },
    { icon: <NoteSquareBold/>, icon_name: 'NoteSquareBold' },
    { icon: <PauseCircleBold/>, icon_name: 'PauseCircleBold' },
    { icon: <PauseBold/>, icon_name: 'PauseBold' },
    { icon: <PlayAddBold/>, icon_name: 'PlayAddBold' },
    { icon: <PlayCircleBold/>, icon_name: 'PlayCircleBold' },
    { icon: <PlayCricleBold/>, icon_name: 'PlayCricleBold' },
    { icon: <PlayRemoveBold/>, icon_name: 'PlayRemoveBold' },
    { icon: <PlayBold/>, icon_name: 'PlayBold' },
    { icon: <PreviousBold/>, icon_name: 'PreviousBold' },
    { icon: <RadioBold/>, icon_name: 'RadioBold' },
    { icon: <RecordCircleBold/>, icon_name: 'RecordCircleBold' },
    { icon: <RecordBold/>, icon_name: 'RecordBold' },
    { icon: <RepeateMusicBold/>, icon_name: 'RepeateMusicBold' },
    { icon: <RepeateOneBold/>, icon_name: 'RepeateOneBold' },
    { icon: <ScissorBold/>, icon_name: 'ScissorBold' },
    { icon: <ScreenmirroringBold/>, icon_name: 'ScreenmirroringBold' },
    { icon: <ShuffleBold/>, icon_name: 'ShuffleBold' },
    { icon: <StopCircleBold/>, icon_name: 'StopCircleBold' },
    { icon: <StopBold/>, icon_name: 'StopBold' },
    { icon: <SubtitleBold/>, icon_name: 'SubtitleBold' },
    { icon: <VideoAddBold/>, icon_name: 'VideoAddBold' },
    { icon: <VideoCircleBold/>, icon_name: 'VideoCircleBold' },
    { icon: <VideoHorizontalBold/>, icon_name: 'VideoHorizontalBold' },
    { icon: <VideoOctagonBold/>, icon_name: 'VideoOctagonBold' },
    { icon: <VideoPlayBold/>, icon_name: 'VideoPlayBold' },
    { icon: <VideoRemoveBold/>, icon_name: 'VideoRemoveBold' },
    { icon: <VideoSlashBold/>, icon_name: 'VideoSlashBold' },
    { icon: <VideoSquareBold/>, icon_name: 'VideoSquareBold' },
    { icon: <VideoTickBold/>, icon_name: 'VideoTickBold' },
    { icon: <VideoTimeBold/>, icon_name: 'VideoTimeBold' },
    { icon: <VideoVerticalBold/>, icon_name: 'VideoVerticalBold' },
    { icon: <VideoBold/>, icon_name: 'VideoBold' },
    { icon: <VoiceCricleBold/>, icon_name: 'VoiceCricleBold' },
    { icon: <VoiceSquareBold/>, icon_name: 'VoiceSquareBold' },
    { icon: <VolumeCrossBold/>, icon_name: 'VolumeCrossBold' },
    { icon: <VolumeHighBold/>, icon_name: 'VolumeHighBold' },
    { icon: <VolumeLow1Bold/>, icon_name: 'VolumeLow1Bold' },
    { icon: <VolumeLowBold/>, icon_name: 'VolumeLowBold' },
    { icon: <VolumeMuteBold/>, icon_name: 'VolumeMuteBold' },
    { icon: <VolumeSlashBold/>, icon_name: 'VolumeSlashBold' },
    { icon: <VolumeUpBold/>, icon_name: 'VolumeUpBold' }
  ]
  const video_audio_outlined =  [
    { icon: <AudioSquareOutlined/>, icon_name: 'AudioSquareOutlined' },
    {
      icon: <Backward10SecondsOutlined/>,
      icon_name: 'Backward10SecondsOutlined'
    },
    {
      icon: <Backward15SecondsOutlined/>,
      icon_name: 'Backward15SecondsOutlined'
    },
    {
      icon: <Backward5SecondsOutlined/>,
      icon_name: 'Backward5SecondsOutlined'
    },
    { icon: <BackwardOutlined/>, icon_name: 'BackwardOutlined' },
    { icon: <CameraSlashOutlined/>, icon_name: 'CameraSlashOutlined' },
    { icon: <CameraOutlined/>, icon_name: 'CameraOutlined' },
    { icon: <DevicesOutlined/>, icon_name: 'DevicesOutlined' },
    {
      icon: <Forward10SecondsOutlined/>,
      icon_name: 'Forward10SecondsOutlined'
    },
    {
      icon: <Forward15SecondsOutlined/>,
      icon_name: 'Forward15SecondsOutlined'
    },
    {
      icon: <Forward5SecondsOutlined/>,
      icon_name: 'Forward5SecondsOutlined'
    },
    { icon: <ForwardOutlined/>, icon_name: 'ForwardOutlined' },
    { icon: <GalleryAddOutlined/>, icon_name: 'GalleryAddOutlined' },
    { icon: <GalleryEditOutlined/>, icon_name: 'GalleryEditOutlined' },
    {
      icon: <GalleryExportOutlined/>,
      icon_name: 'GalleryExportOutlined'
    },
    {
      icon: <GalleryFavoriteOutlined/>,
      icon_name: 'GalleryFavoriteOutlined'
    },
    {
      icon: <GalleryImportOutlined/>,
      icon_name: 'GalleryImportOutlined'
    },
    {
      icon: <GalleryRemoveOutlined/>,
      icon_name: 'GalleryRemoveOutlined'
    },
    {
      icon: <GallerySlashOutlined/>,
      icon_name: 'GallerySlashOutlined'
    },
    { icon: <GalleryTickOutlined/>, icon_name: 'GalleryTickOutlined' },
    { icon: <GalleryOutlined/>, icon_name: 'GalleryOutlined' },
    { icon: <ImageOutlined/>, icon_name: 'ImageOutlined' },
    {
      icon: <MaximizeCircleOutlined/>,
      icon_name: 'MaximizeCircleOutlined'
    },
    { icon: <Microphone2Outlined/>, icon_name: 'Microphone2Outlined' },
    {
      icon: <MicrophoneSlash1Outlined/>,
      icon_name: 'MicrophoneSlash1Outlined'
    },
    {
      icon: <MicrophoneSlashOutlined/>,
      icon_name: 'MicrophoneSlashOutlined'
    },
    { icon: <MicrophoneOutlined/>, icon_name: 'MicrophoneOutlined' },
    {
      icon: <MiniMusicSqaureOutlined/>,
      icon_name: 'MiniMusicSqaureOutlined'
    },
    { icon: <MusicCircleOutlined/>, icon_name: 'MusicCircleOutlined' },
    {
      icon: <MusicDashboardOutlined/>,
      icon_name: 'MusicDashboardOutlined'
    },
    { icon: <MusicFilterOutlined/>, icon_name: 'MusicFilterOutlined' },
    {
      icon: <MusicLibrary2Outlined/>,
      icon_name: 'MusicLibrary2Outlined'
    },
    {
      icon: <MusicPlaylistOutlined/>,
      icon_name: 'MusicPlaylistOutlined'
    },
    {
      icon: <MusicSquareAddOutlined/>,
      icon_name: 'MusicSquareAddOutlined'
    },
    {
      icon: <MusicSquareRemoveOutlined/>,
      icon_name: 'MusicSquareRemoveOutlined'
    },
    {
      icon: <MusicSquareSearchOutlined/>,
      icon_name: 'MusicSquareSearchOutlined'
    },
    { icon: <MusicSquareOutlined/>, icon_name: 'MusicSquareOutlined' },
    { icon: <MusicnoteOutlined/>, icon_name: 'MusicnoteOutlined' },
    { icon: <MusicOutlined/>, icon_name: 'MusicOutlined' },
    { icon: <NextOutlined/>, icon_name: 'NextOutlined' },
    { icon: <NoteSquareOutlined/>, icon_name: 'NoteSquareOutlined' },
    { icon: <PauseCircleOutlined/>, icon_name: 'PauseCircleOutlined' },
    { icon: <PauseOutlined/>, icon_name: 'PauseOutlined' },
    { icon: <PlayAddOutlined/>, icon_name: 'PlayAddOutlined' },
    { icon: <PlayCircleOutlined/>, icon_name: 'PlayCircleOutlined' },
    { icon: <PlayCricleOutlined/>, icon_name: 'PlayCricleOutlined' },
    { icon: <PlayRemoveOutlined/>, icon_name: 'PlayRemoveOutlined' },
    { icon: <PlayOutlined/>, icon_name: 'PlayOutlined' },
    { icon: <PreviousOutlined/>, icon_name: 'PreviousOutlined' },
    { icon: <RadioOutlined/>, icon_name: 'RadioOutlined' },
    {
      icon: <RecordCircleOutlined/>,
      icon_name: 'RecordCircleOutlined'
    },
    { icon: <RecordOutlined/>, icon_name: 'RecordOutlined' },
    {
      icon: <RepeateMusicOutlined/>,
      icon_name: 'RepeateMusicOutlined'
    },
    { icon: <RepeateOneOutlined/>, icon_name: 'RepeateOneOutlined' },
    { icon: <ScissorOutlined/>, icon_name: 'ScissorOutlined' },
    {
      icon: <ScreenmirroringOutlined/>,
      icon_name: 'ScreenmirroringOutlined'
    },
    { icon: <ShuffleOutlined/>, icon_name: 'ShuffleOutlined' },
    { icon: <StopCircleOutlined/>, icon_name: 'StopCircleOutlined' },
    { icon: <StopOutlined/>, icon_name: 'StopOutlined' },
    { icon: <SubtitleOutlined/>, icon_name: 'SubtitleOutlined' },
    { icon: <VideoAddOutlined/>, icon_name: 'VideoAddOutlined' },
    { icon: <VideoCircleOutlined/>, icon_name: 'VideoCircleOutlined' },
    {
      icon: <VideoHorizontalOutlined/>,
      icon_name: 'VideoHorizontalOutlined'
    },
    {
      icon: <VideoOctagonOutlined/>,
      icon_name: 'VideoOctagonOutlined'
    },
    { icon: <VideoPlayOutlined/>, icon_name: 'VideoPlayOutlined' },
    { icon: <VideoRemoveOutlined/>, icon_name: 'VideoRemoveOutlined' },
    { icon: <VideoSlashOutlined/>, icon_name: 'VideoSlashOutlined' },
    { icon: <VideoSquareOutlined/>, icon_name: 'VideoSquareOutlined' },
    { icon: <VideoTickOutlined/>, icon_name: 'VideoTickOutlined' },
    { icon: <VideoTimeOutlined/>, icon_name: 'VideoTimeOutlined' },
    {
      icon: <VideoVerticalOutlined/>,
      icon_name: 'VideoVerticalOutlined'
    },
    { icon: <VideoOutlined/>, icon_name: 'VideoOutlined' },
    { icon: <VoiceCricleOutlined/>, icon_name: 'VoiceCricleOutlined' },
    { icon: <VoiceSquareOutlined/>, icon_name: 'VoiceSquareOutlined' },
    { icon: <VolumeCrossOutlined/>, icon_name: 'VolumeCrossOutlined' },
    { icon: <VolumeHighOutlined/>, icon_name: 'VolumeHighOutlined' },
    { icon: <VolumeLow1Outlined/>, icon_name: 'VolumeLow1Outlined' },
    { icon: <VolumeLowOutlined/>, icon_name: 'VolumeLowOutlined' },
    { icon: <VolumeMuteOutlined/>, icon_name: 'VolumeMuteOutlined' },
    { icon: <VolumeSlashOutlined/>, icon_name: 'VolumeSlashOutlined' },
    { icon: <VolumeUpOutlined/>, icon_name: 'VolumeUpOutlined' }
  ]
  
  const copy = () => {
    setcopied(true);
    toast.success("Copied to Clipboard");
  };

  return (
    <>
      <div className="main-panel">
        <div className="tb-container">
          <div className="tb-content-bold">
            <h2 className="icon-heading">Video , Audio , Image</h2>
            <h3 className="icon-type">Bold</h3>
            <div className="tb-row">
              {video_audio_bold.map((i) => {
                return (
                  <div className="tb-data">
                    <CopyToClipboard text={i.icon_name} onCopy={copy}>
                      <button className="copy-button">
                        <div className="icon-img">{i.icon}</div>
                      </button>
                    </CopyToClipboard>

                    <div className="icon-name" value={i.icon_name}>
                      {i.icon_name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tb-content-outlined">
            <h3 className="icon-type">Outlined</h3>
            <div className="tb-row">
              {video_audio_outlined.map((i) => {
                return (
                  <div className="tb-data">
                    <CopyToClipboard text={i.icon_name} onCopy={copy}>
                      <button className="copy-button">
                        <div className="icon-img">{i.icon}</div>
                      </button>
                    </CopyToClipboard>
                    <div className="icon-name">{i.icon_name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={500}
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
