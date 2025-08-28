import axios from 'axios';

const searchTerm = process.argv[2];

const url = `https://musicbrainz.org/ws/2/artist?query=${searchTerm}`
const searchResults = await axios.get(url);
const myArtistId = searchResults.data.artists[0].id;

const releasesUrl = `https://musicbrainz.org/ws/2/artist/${myArtistId}?inc=releases`;
const releaseResponse = await axios.get(releasesUrl);

console.log(`All releases by the band ${searchTerm} (${myArtistId})`);
for (let release of releaseResponse.data.releases) {
  console.log(`\t[${release.date}] ${release.title}`);
}
