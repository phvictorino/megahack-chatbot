import React, { useState } from 'react';
import RecordRTC from 'recordrtc';
import { findByItemName } from '../../services/products';

import * as S from './styles';
import MicrophoneButton from '../../components/MicrophoneButton';

const Start: React.FC = () => {
  const [recorder, setRecorder] = useState(Object);
  const [isRecording, setRecording] = useState(false);

  const startRecord = async (): Promise<void> => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    });
    const tempRecorder = RecordRTC(stream, {
      type: 'audio',
      mimeType: 'audio/wav',
      recorderType: RecordRTC.StereoAudioRecorder,
    });
    tempRecorder.startRecording();
    setRecorder(tempRecorder);
    setRecording(true);
  };

  const findByWords = (): void => {
    findByItemName('TV');
  };

  const stopRecord = (): void => {
    recorder.stopRecording(() => {
      console.log(recorder);
      const reader = new window.FileReader();
      reader.readAsDataURL(recorder.getBlob());
      reader.onloadend = function () {
        // console.log(reader.result); // ENVIAR ESSE RESULT PARA API
      };
      // handleRecognize(recorder.buffer);
      setRecording(false);
      findByWords();
    });
  };

  const handleRecord = (): void => {
    if (!isRecording) {
      startRecord();
    } else {
      stopRecord();
    }
  };

  return (
    <S.Container>
      <S.TitleContainer>
        Bem vindo a nova experiência em compras online.
      </S.TitleContainer>
      <S.SubtitleContainer>O que vamos comprar hoje?</S.SubtitleContainer>
      <MicrophoneButton onClick={() => handleRecord()} />
    </S.Container>
  );
};

export default Start;
