/**
 * Booking API
 * @author kedari.mahesh@gmail.com
 */
const seededRandom = function (seed: any) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export function fetchAPI(date: any) :Array<any> {
  let result = [];
  let dt = new Date(date);
  let seed = dt.getDate();

  let random = seededRandom(seed);
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}

export function submitAPI(formData: any) {
  return true;
}
