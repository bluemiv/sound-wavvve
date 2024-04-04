export const getAudioBuffer = (buffer: ArrayBuffer) => {
  const audioContext = new AudioContext();
  return audioContext.decodeAudioData(buffer);
};
