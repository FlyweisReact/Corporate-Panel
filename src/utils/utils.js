/** @format */

const tokenSaver = (res) => {
  localStorage.setItem("token", res);
};

const dateFormatter = (date) => {
  const originalDate = new Date(date);
  const month = originalDate?.toLocaleDateString("en-US", {
    month: "long",
  });
  const day = originalDate?.toLocaleDateString("en-US", {
    month: "numeric",
  });
  const year = originalDate?.toLocaleDateString("en-US", {
    year: "numeric",
  });
  const time = originalDate?.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const hasAll = day && year && time;

  return (
    hasAll && (
      <span>
        {" "}
        {month?.slice(0, 3)} {day}, {year} {time}{" "}
      </span>
    )
  );
};

export function convertMinutesToTimeFormat(minutes) {
  if (isNaN(minutes) || minutes < 0) {
    return "00:00:00";
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const seconds = 0;
  const formattedTime =
    String(hours).padStart(2, "0") +
    ":" +
    String(remainingMinutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  return formattedTime;
}

const returnFullName = (i) => {
  if (i?.fullName) {
    return i.fullName;
  } else if (i?.firstName || i?.lastName) {
    return i?.firstName + " " + i.lastName;
  } else {
    return "";
  }
};

const LogOutHandler = (navigate) => {
  localStorage.clear();
  navigate("/");
};

export const getCorrectTime = (time) => {
  const updateTime = new Date(time);
  const timezoneOffset = updateTime?.getTimezoneOffset();
  const adjustedTime = new Date(updateTime.getTime() + timezoneOffset * 60000);
  return adjustedTime;
};

export const convertSecondsToHHMM = (seconds) => {
  const totalMinutes = Math.floor(seconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
};

export { tokenSaver, dateFormatter, returnFullName, LogOutHandler };
