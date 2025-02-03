import React from 'react';
const apiUrl = `https://aditi.ipadlive.com/mod_cms/api/apti.music.app.php?buildid=BUDDIEBEATZ&androidid=0717993a01f417ed&pl=HMD%20Global%20Nokia%205.4&ei=&cc=&mver=0000004&nc=&ims=&loc=&ver=APTINEW0010&apiver=0.3&country=ZWE&operator=ECONET&locale=en&lang=en&uniquecustomid=230506162135034&ui=mhyw88awx5pd436j&ckey=&dkey=27abqqmzmzk22dvc&ua=Mozilla/5.0%20(Linux;%20Android%2012;%20Nokia%205.4%20Build/SKQ1.220119.001;%20wv)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Version/4.0%20Chrome/116.0.0.0%20Mobile%20Safari/537.36&email=&sw=720&sh=1406&versioncode=35&referrer=tm_source=google-play&utm_medium=organic&referrerdt=06-May-2023&socialid=&conn=wifi&conntype=&invitecode=&subtype=null&cgr=0`;

const UrlLink = ({ a, onApiDataReceived }) => {
  let url = apiUrl;
  for (const [key, value] of Object.entries(a)) {
    url += `&${key}=${value}`;
  }
  fetch(url).then((response) => response.json()).then((data) => {
    if (onApiDataReceived) {
      onApiDataReceived(data);
      console.log('URL LINK:');
      console.log(url);
    }
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
  return <></>;
};
export { apiUrl }; 
export default UrlLink;