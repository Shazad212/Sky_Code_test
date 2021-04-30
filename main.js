var channels =document.getElementById('selection');
function getChecked () {
    channelSelection = document.getElementsByName('channel');
    channels.innerHTML = '<h4>Your Current Rewards:<h4>';
s = 0;
channelSelection.forEach(element => {
  if(element.checked) {
      channels.innerHTML += element.value + ' ';
      s += 1; 
  }
  });
if (s==0) {
  channels.innerHTML += 'Please select a channel';
}

}
