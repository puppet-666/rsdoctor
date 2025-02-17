export const JSExtension = '.js';

export const CSSExtension = '.css';

export const HtmlExtension = '.html';

export const ImgExtensions = [
  '.png',
  '.jpg',
  '.svg',
  '.webp',
  '.jpeg',
  '.gif',
  '.bmp',
];

export const MediaExtensions = [
  '.mp3',
  '.mp4',
  '.avi',
  '.wav',
  '.flv',
  '.mov',
  '.mpg',
  '.mpeg',
];

export const FontExtensions = ['.ttf', '.fnt', '.fon', '.otf'];

export const MapExtensions = ['.js.map', '.ts.map', '.LICENSE.txt'];

export const RsdoctorOutputFolder = '.rsdoctor';

export const RsdoctorOutputManifest = 'manifest.json';

export const RsdoctorOutputManifestPath =
  `${RsdoctorOutputFolder}/${RsdoctorOutputManifest}` as const;

export const StatsFilePath = 'dist/stats.json';

export const RsdoctorMonitorNodeBId = 'Rsdoctor';

export const RsdoctorMonitorWebBId = 'Rsdoctor-Client';

export const RsdoctorMonitorDocBId = 'Rsdoctor-Doc';

export const RsdoctorProcessEnvDebugKey = 'RSDOCTOR_DEBUG';

export const RsdoctorClientUrl = '' // TODO: rsdoctor client url
