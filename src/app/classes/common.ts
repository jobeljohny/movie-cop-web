const trackers = [
  'udp://open.demonii.com:1337/announce',
  'udp://tracker.openbittorrent.com:80',
  'udp://tracker.coppersurfer.tk:6969',
  'udp://glotorrents.pw:6969/announce',
  'udp://tracker.opentrackr.org:1337/announce',
  'udp://torrent.gresille.org:80/announce',
  'udp://p4p.arenabg.com:1337',
  'udp://tracker.leechers-paradise.org:6969',
];

export function getRuntime(time: number) {
  const hours = ~~(time / 60),
    minutes = time % 60;
  let runtime = +hours + ' Hour';
  if (hours != 1) runtime += 's';
  runtime += ' ' + minutes + ' Minutes';
  return runtime;
}

export function generateMagnetLink(hash: string, name: string) {
  let link = 'magnet:?xt=urn:btih:' + hash + '&dn=' + encodeURIComponent(name);
  trackers.forEach((tracker) => {
    link += '&tr=' + tracker;
  });
  return link;
}
