// expecting time to be a string in the format like '8:15' or '12:30'


const timeToString = 
[
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'quarter',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty one',
  'twenty two',
  'twenty three',
  'twenty four',
  'twenty five',
  'twenty six',
  'twenty seven',
  'twenty eight',
  'twenty nine',
  'half'
]

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }
  if(time === '12:00') {
    return 'midday';
  }

  const timeSplitted = time.split(':');
  const hour = parseInt(timeSplitted[0]);
  const minutes = parseInt(timeSplitted[1]);
  const hourInString = convertHourToString(hour);

  if(minutes === 0) {
    return hourInString+ " o'clock";
  }
  else if(minutes <=30) {
    return convertHourPast(hour,minutes);
  }
  else {
    return convertHourTo(hour,minutes);
  }
}

function convertHourPast(hour,minute) {
  const hourString = timeToString[hour - 1];
  const minutes = timeToString[minute - 1];
  return minutes+ ' past ' + hourString;
}

function convertHourTo(hour,minute) {
  const hourString = timeToString[hour];
  const minutesString = timeToString[59 - minute];
  return minutesString + ' to '+ hourString;
}

function convertHourToString(hour) {
  return timeToString[hour - 1];
}

module.exports = { convertTimeToWords };