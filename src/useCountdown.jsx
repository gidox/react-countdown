import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
  console.log({ s: new Date(targetDate).toISOString()})
  const [initilize, setInitialize] = useState(false)
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    0
  );

  useEffect(() => {
    if(initilize) {
      const interval = setInterval(() => {
        if(countDownDate > new Date) {
          setCountDown(countDownDate - new Date().getTime());
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countDownDate, initilize]);

  return { countdown: getReturnValues(countDown), init: () => { setInitialize(true) } }
};

const getReturnValues = (countDown) => {

  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [minutes, seconds];
};

export { useCountdown };
