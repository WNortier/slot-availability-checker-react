import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import _styles from "../../styles/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    width: "100%",
    height: "78vh",
  },
  red: {
    backgroundColor: "#cb4335",
  },
  flexbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cell: {
    textAlign: "center",
  },
});

const availabilityData = [
  {
    Date: "-",
    HoursAvailable: [],
  },
  {
    Date: "2016-05-18",
    HoursAvailable: ["09:00 - 10:00", 9, 9, 9, 9, "FULL", "FULL"],
  },
  {
    Date: "2016-05-19",
    HoursAvailable: ["10:00 - 11:00", 10, 10, 10, 10, "FULL", "FULL"],
  },
  {
    Date: "2016-05-20",
    HoursAvailable: ["11:00 - 12:00", 11, 11, "FULL", 11, "FULL", 11],
  },
  {
    Date: "2016-05-21",
    HoursAvailable: ["12:00 - 13:00", 12, 12, "FULL", 12, "FULL", 12],
  },
  {
    Date: "2016-05-23",
    HoursAvailable: ["13:00 - 14:00", 13, 13, "FULL", 13, 13, "FULL"],
  },
  {
    Date: "2016-05-24",
    HoursAvailable: ["14:00 - 15:00", 14, 14, 14, "FULL", 14, "FULL"],
  },
  {
    Date: "",
    HoursAvailable: ["15:00 - 16:00", "FULL", 15, 15, "FULL", 15, 15],
  },
  {
    Date: "",
    HoursAvailable: ["16:00 - 17:00", "FULL", 16, 16, "FULL", 16, 16],
  },
  {
    Date: "",
    HoursAvailable: ["17:00 - 18:00", 17, 17, 17, "FULL", "FULL", 17],
  },
];

const helper = {
  availabilty: [9, 10, 14, 15, 16, 17],
  availabilityData: [
    {
      Date: "-",
      HoursAvailable: [],
      Time: "09:00 - 10:00",
    },
    {
      Date: "2016-05-18",
      HoursAvailable: ["09:00 - 10:00", 9, 9, 9, 9, "FULL", "FULL"],
      Slots: [9, 10, 11, 12, 13, 14, "x", "x", 17],
    },
    {
      Date: "2016-05-19",
      HoursAvailable: ["10:00 - 11:00", 10, 10, 10, 10, "FULL", "FULL"],
      Slots: [9, 10, 11, 12, 13, 14, 15, 16, 17],
    },
    {
      Date: "2016-05-20",
      HoursAvailable: ["11:00 - 12:00", 11, 11, "FULL", 11, "FULL", 11],
      Slots: [9, 10, "x", "x", "x", 14, 15, 16, 17],
    },
    {
      Date: "2016-05-21",
      HoursAvailable: ["12:00 - 13:00", 12, 12, "FULL", 12, "FULL", 12],
      Slots: [9, 10, 11, 12, 13, "x", "x", "x", "x"],
    },

    {
      Date: "2016-05-23",
      HoursAvailable: ["13:00 - 14:00", 13, 13, "FULL", 13, 13, "FULL"],
      Slots: ["x", "x", "x", "x", 13, 14, 15, 16, "x"],
    },
    {
      Date: "2016-05-24",
      HoursAvailable: ["14:00 - 15:00", 14, 14, 14, "FULL", 14, "FULL"],
      Slots: ["x", "x", 11, 12, "x", "x", 15, 16, 17],
    },
    {
      Date: "",
      HoursAvailable: ["15:00 - 16:00", "FULL", 15, 15, "FULL", 15, 15],
    },
    {
      Date: "",
      HoursAvailable: ["16:00 - 17:00", "FULL", 16, 16, "FULL", 16, 16],
    },
    {
      Date: "",
      HoursAvailable: ["17:00 - 18:00", 17, 17, 17, "FULL", "FULL", 17],
    },
  ],
  jobLength: 0,
  travelBuffer: 0,
  timeSlotLength: 0,
  timeRequired: 0,
  sameDateBuffer: 0,
  dates: [
    { date: "2016-05-17" },
    { date: "2016-05-18" },
    { date: "2016-05-19" },
    { date: "2016-05-20" },
    { date: "2016-05-21" },
    { date: "2016-05-23" },
    { date: "2016-05-24" },
  ],
  dateSlots: [],

  currentDate: "2016-05-19T11:27:00",
  calcTimeRequired: (jobLength: any) => {
    helper.jobLength = jobLength;

    helper.timeRequired =
      helper.travelBuffer + helper.sameDateBuffer + +helper.jobLength;
    return helper.timeRequired;
  },
  calcTimeslotLength: (
    time: any,
    availabilty: any,
    cellIndex: any,
    innerHTML: any
  ) => {
    let timeSlots;

    //@ts-ignore
    if (cellIndex == 1) {
      //@ts-ignore
      timeSlots = helper.availabilityData[1].Slots.filter(
        //@ts-ignore
        (x) => typeof x === "number"
      );
    }
    if (cellIndex == 2) {
      //@ts-ignore
      timeSlots = helper.availabilityData[2].Slots.filter(
        //@ts-ignore
        (x) => typeof x === "number"
      );
    }
    if (cellIndex == 3) {
      //@ts-ignore
      timeSlots = helper.availabilityData[3].Slots.filter(
        //@ts-ignore
        (x) => typeof x === "number"
      );
    }
    if (cellIndex == 4) {
      //@ts-ignore
      timeSlots = helper.availabilityData[4].Slots.filter(
        //@ts-ignore
        (x) => typeof x === "number"
      );
    }
    if (cellIndex == 5) {
      //@ts-ignore
      timeSlots = helper.availabilityData[5].Slots.filter(
        //@ts-ignore
        (x) => typeof x === "number"
      );
    }
    if (cellIndex == 6) {
      //@ts-ignore
      timeSlots = helper.availabilityData[6].Slots.filter(
        //@ts-ignore
        (x) => typeof x === "number"
      );
    }
    if (cellIndex == 7) {
      //@ts-ignore
      timeSlots = helper.availabilityData[7].Slots.filter(
        //@ts-ignore
        (x) => typeof x === "number"
      );
    }

    //@ts-ignore
    if (timeSlots.indexOf(time) == timeSlots.length - 1) {
      if (time == 13) {
        helper.timeSlotLength = 5;
      }
      if (time == 14) {
        helper.timeSlotLength = 4;
      }
      if (time == 15) {
        helper.timeSlotLength = 3;
      }
      if (time == 16) {
        helper.timeSlotLength = 2;
      }
      if (time == 17) {
        helper.timeSlotLength = 1;
      }
    } else {
      //@ts-ignore
      helper.timeSlotLength =
        //@ts-ignore
        timeSlots[timeSlots.indexOf(time) + 1] -
        //@ts-ignore
        timeSlots[timeSlots.indexOf(time)];
    }
    return helper.timeSlotLength;
  },
  formatDate: (input: any) => {
    let date = new Date(input);
    let year = date.getUTCFullYear();
    let month;
    let day;
    if (String(date.getMonth()).length === 1) {
      month = `0${date.getMonth() + 1}`;
    } else {
      month = date.getMonth();
    }
    if (String(date.getDate()).length === 1) {
      day = `0${date.getDate()}`;
    } else {
      day = date.getDate();
    }
    return `${year}-${month}-${day}`;
  },
};
let dateSlots = helper.dates.map((d) => {
  return d.date;
});
//@ts-ignore
helper.dateSlots = dateSlots;
const handleSameDateBuffer = (
  time: any,
  jobLength: any,
  date: any,
  availabilityData: any
) => {
  const jobDateFormatted = helper.formatDate(date);
  const currentDateFormatted = helper.formatDate(helper.currentDate);

  if (jobDateFormatted == currentDateFormatted) {
    helper.sameDateBuffer = 2;
    return helper.sameDateBuffer;
  } else {
    helper.sameDateBuffer = 0;
  }
};

const handleTravelBuffer = (
  time: any,
  jobLength: any,
  date: any,
  availabilityData: any,
  cellIndex: any
) => {
  if (
    //@ts-ignore
    +time == helper.availabilityData[+cellIndex].Slots[0] ||
    //@ts-ignore
    +time ==
      //@ts-ignore
      helper.availabilityData[+cellIndex].Slots[
        //@ts-ignore
        helper.availabilityData[+cellIndex].Slots.length - 1
      ]
  ) {
    helper.travelBuffer = 0;
    return helper.travelBuffer;
  }

  //@ts-ignore
  if (helper.indexOfSlot) {
    helper.travelBuffer = 2;
    return helper.travelBuffer;
  }
};

const isDateListed = (
  time: any,
  jobLength: any,
  date: any,
  availabilityData: any
) => {
  const jobDateFormatted = helper.formatDate(date);

  const availabilityDates = availabilityData.map((d: any) => {
    return d.Date;
  });

  if (
    availabilityDates == undefined ||
    availabilityDates.includes(jobDateFormatted) == false
  ) {
    return "FULL";
  } else if (availabilityDates.includes(jobDateFormatted)) {
    return "AVAILABLE";
  }
};

const isSlotListed = (
  time: any,
  jobLength: any,
  date: any,
  availabilityData: any
) => {
  const jobDateFormatted = helper.formatDate(date);

  const selectedDate = availabilityData.find((d: any) => {
    return d.Date == jobDateFormatted;
  });

  if (
    selectedDate == undefined ||
    //@ts-ignore
    availabilityData.includes(+time) == false
  ) {
    return "FULL";
    //@ts-ignore
  } else if (availabilityData.includes(+time)) {
    return "AVAILABLE";
  }
};

const isTimeslotLengthGreatherThanJobLength = (
  time: any,
  jobLength: any,
  date: any,
  availabilityData: any,
  cellIndex: any,
  innerHTML: any
) => {
  if (cellIndex == 0) {
    return;
  } else if (cellIndex !== 0) {
    handleSameDateBuffer(time, jobLength, date, availabilityData);
    handleTravelBuffer(time, jobLength, date, availabilityData, cellIndex);
    isDateListed(time, jobLength, date, availabilityData);
    isSlotListed(time, jobLength, date, availabilityData);
    helper.calcTimeslotLength(time, availabilityData, cellIndex, innerHTML);
    helper.calcTimeRequired(jobLength);

    if (helper.timeSlotLength < helper.timeRequired) {
      return "UNAVAILABLE";
    } else {
      return "AVAILABLE";
    }
  }
};

export default function BasicTable() {
  const classes = useStyles();

  const valuetext = (value: number) => {
    return `${value}°C`;
  };

  const handleSlider = (e: any) => {};

  useEffect(() => {
    //@ts-ignore
    document.querySelectorAll("#cell")[0].innerHTML = "Times";
    for (let i = 1; i < 10; i++) {
      //@ts-ignore
      let dataRow = document.querySelectorAll(`#data${i}`);
      //@ts-ignore
      dataRow[0].style.backgroundColor = "#2F4858";
      //@ts-ignore
      dataRow[0].style.color = "#f3f3f3";
      //@ts-ignore
      dataRow[0].setAttribute("disabled", "true");
      dataRow.forEach((d) => {
        if (d.innerHTML == "FULL") {
          //@ts-ignore
          d.style.backgroundColor = "#cb4335";
          d.setAttribute("disabled", "true");
        } else if (d.innerHTML.length < 3) {
          d.innerHTML = "Available";
        }
      });
    }
  }, []);

  const alertCell = (e: any) => {
    if (e.target.innerHTML.includes("0")) {
      return;
    }

    const innerHTML = e.target.innerHTML;
    const slot = e.target.getAttribute("data-slot");
    let cellIndex = e.target.cellIndex;
    const id = e.target.id;
    let date = helper.dates[cellIndex].date;

    //@ts-ignore
    const sliderValue = document.querySelector("#slider").innerText;
    let availData: any = [];
    //@ts-ignore
    let isSlotLastChecker = helper.availabilityData[cellIndex].Slots.indexOf(
      +slot + 1
    );
    //@ts-ignore
    let isIndexLast = helper.availabilityData[cellIndex].Slots.indexOf(
      //@ts-ignore
      helper.availabilityData[cellIndex].Slots[isSlotLastChecker]
    );
    //@ts-ignore
    let slots = helper.availabilityData[cellIndex].Slots.filter(
      (x) => typeof x === "number"
    );
    let indexOfSlot = slots.indexOf(+slot);
    if (innerHTML != "Selected" && innerHTML != "FULL") {
      e.target.style.backgroundColor = "lightgrey";
      e.target.innerHTML = "Unavailable";
    }
    if (
      isTimeslotLengthGreatherThanJobLength(
        +slot,
        sliderValue,
        date,
        availData,
        cellIndex,
        innerHTML
      ) == "UNAVAILABLE" &&
      cellIndex != 0
    ) {
      e.target.style.backgroundColor = "lightgrey";
      e.target.innerHTML = "Unavailable";
    }

    if (slot == 14 && sliderValue == 2) {
      document.querySelectorAll(
        //@ts-ignore
        `#data${+cellIndex + 5}`
        //@ts-ignore
      )[1].style.backgroundColor = "#229954";
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + 5}`
        //@ts-ignore
      )[1].disabled = "true";
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + 5}`
        //@ts-ignore
      )[1].innerHTML = "Selected";
      document.querySelectorAll(
        //@ts-ignore
        `#data${+cellIndex + indexOfSlot + 1}`
        //@ts-ignore
      )[1].style.backgroundColor = "#229954";
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + indexOfSlot + 1}`
        //@ts-ignore
      )[1].disabled = "true";
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + indexOfSlot + 1}`
        //@ts-ignore
      )[1].innerHTML = "Selected";
      document.querySelectorAll(
        //@ts-ignore
        `#data${+cellIndex + indexOfSlot + 2}`
        //@ts-ignore
      )[1].style.backgroundColor = "#229954";
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + indexOfSlot + 2}`
        //@ts-ignore
      )[1].disabled = "true";
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + indexOfSlot + 2}`
        //@ts-ignore
      )[1].innerHTML = "Selected";
      document.querySelectorAll(
        //@ts-ignore
        `#data${+cellIndex + indexOfSlot + 3}`
        //@ts-ignore
      )[1].style.backgroundColor = "#229954";
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + indexOfSlot + 3}`
        //@ts-ignore
      )[1].disabled = "true";
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + indexOfSlot + 3}`
        //@ts-ignore
      )[1].innerHTML = "Selected";
    }
    if (slot == 10 && sliderValue == 2) {
      e.target.style.backgroundColor = "#229954";
      e.target.disabled = "true";
      e.target.innerHTML = "Selected";
      document.querySelectorAll(
        //@ts-ignore
        `#data${+cellIndex - 2}`
        //@ts-ignore
      )[3].style.backgroundColor = "#229954";
      document
        .querySelectorAll(
          //@ts-ignore
          `#data${cellIndex - 2}`
        )[3]
        .setAttribute("disabled", "true");
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex - 2}`
        //@ts-ignore
      )[3].innerHTML = "Selected";

      document.querySelectorAll(
        //@ts-ignore
        `#data${+cellIndex}`
        //@ts-ignore
      )[3].style.backgroundColor = "#229954";
      document
        .querySelectorAll(
          //@ts-ignore
          `#data${cellIndex}`
        )[3]
        .setAttribute("disabled", "true");
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex}`
        //@ts-ignore
      )[3].innerHTML = "Selected";
      document.querySelectorAll(
        //@ts-ignore
        `#data${+cellIndex + 1}`
        //@ts-ignore
      )[3].style.backgroundColor = "#229954";
      document
        .querySelectorAll(
          //@ts-ignore
          `#data${cellIndex + 1}`
        )[3]
        .setAttribute("disabled", "true");
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + 1}`
        //@ts-ignore
      )[3].innerHTML = "Selected";
    }

    if (slot == "13" && sliderValue == "2") {
      document.querySelectorAll(
        //@ts-ignore
        `#data${+cellIndex + indexOfSlot - 1}`
        //@ts-ignore
      )[4].style.backgroundColor = "#229954";
      document
        .querySelectorAll(
          //@ts-ignore
          `#data${cellIndex + indexOfSlot - 1}`
        )[4]
        .setAttribute("disabled", "true");
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + indexOfSlot - 1}`
        //@ts-ignore
      )[4].innerHTML = "Selected";
      document.querySelectorAll(
        //@ts-ignore
        `#data${+cellIndex + 2}`
        //@ts-ignore
      )[4].style.backgroundColor = "#229954";
      document
        .querySelectorAll(
          //@ts-ignore
          `#data${cellIndex + 2}`
        )[4]
        .setAttribute("disabled", "true");
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + 2}`
        //@ts-ignore
      )[4].innerHTML = "Selected";
      document.querySelectorAll(
        //@ts-ignore
        `#data${+cellIndex + 4}`
        //@ts-ignore
      )[4].style.backgroundColor = "#229954";
      document
        .querySelectorAll(
          //@ts-ignore
          `#data${cellIndex + 4}`
        )[4]
        .setAttribute("disabled", "true");
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + 4}`
        //@ts-ignore
      )[4].innerHTML = "Selected";
    }
    if (slot == "13" && sliderValue == "3") {
      document.querySelectorAll(
        //@ts-ignore
        `#data${+cellIndex + indexOfSlot - 1}`
        //@ts-ignore
      )[4].style.backgroundColor = "#229954";
      document
        .querySelectorAll(
          //@ts-ignore
          `#data${cellIndex + indexOfSlot - 1}`
        )[4]
        .setAttribute("disabled", "true");
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + indexOfSlot - 1}`
        //@ts-ignore
      )[4].innerHTML = "Selected";
      document.querySelectorAll(
        //@ts-ignore
        `#data${+cellIndex + 2}`
        //@ts-ignore
      )[4].style.backgroundColor = "#229954";
      document
        .querySelectorAll(
          //@ts-ignore
          `#data${cellIndex + 2}`
        )[4]
        .setAttribute("disabled", "true");
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + 2}`
        //@ts-ignore
      )[4].innerHTML = "Selected";
      document.querySelectorAll(
        //@ts-ignore
        `#data${+cellIndex + 4}`
        //@ts-ignore
      )[4].style.backgroundColor = "#229954";
      document
        .querySelectorAll(
          //@ts-ignore
          `#data${cellIndex + 4}`
        )[4]
        .setAttribute("disabled", "true");
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + 4}`
        //@ts-ignore
      )[4].innerHTML = "Selected";
      document.querySelectorAll(
        //@ts-ignore
        `#data${+cellIndex + 3}`
        //@ts-ignore
      )[4].style.backgroundColor = "#229954";
      document
        .querySelectorAll(
          //@ts-ignore
          `#data${cellIndex + 3}`
        )[4]
        .setAttribute("disabled", "true");
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + 3}`
        //@ts-ignore
      )[4].innerHTML = "Selected";
      document.querySelectorAll(
        //@ts-ignore
        `#data${+cellIndex + 5}`
        //@ts-ignore
      )[4].style.backgroundColor = "#229954";
      document
        .querySelectorAll(
          //@ts-ignore
          `#data${cellIndex + 5}`
        )[4]
        .setAttribute("disabled", "true");
      document.querySelectorAll(
        //@ts-ignore
        `#data${cellIndex + 5}`
        //@ts-ignore
      )[4].innerHTML = "Selected";
    }
    //@ts-ignore
    helper.travelBuffer = 2;
    if (sliderValue == "1" && cellIndex == "1") {
      //@ts-ignore
      availabilityData[1].HoursAvailable.unshift();
      availData.push(helper.availabilityData[1].HoursAvailable);
      //@ts-ignore
      slots = helper.availabilityData[1].Slots.filter(
        (x) => typeof x === "number"
      );
      //@ts-ignore
      isSlotLastChecker = slots.indexOf(+slot) + 1;
      //@ts-ignore
      isIndexLast = slots.indexOf(slots[isSlotLastChecker]);
    } else if (sliderValue == "1" && cellIndex == "2") {
      helper.travelBuffer = 2;
      helper.sameDateBuffer = 2;

      //@ts-ignore
      availabilityData[1].HoursAvailable.unshift();
      availData.push(helper.availabilityData[1].HoursAvailable);
      //@ts-ignore
      slots = helper.availabilityData[2].Slots.filter(
        (x) => typeof x === "number"
      );
      //@ts-ignore
      isSlotLastChecker = slots.indexOf(+slot) + 1;
      //@ts-ignore
      isIndexLast = slots.indexOf(slots[isSlotLastChecker]);
    } else if (
      sliderValue == "1" &&
      cellIndex == "3"
      //  &&
    ) {
      helper.travelBuffer = 2;
      helper.sameDateBuffer = 2;

      //@ts-ignore
      availabilityData[3].HoursAvailable.unshift();
      availData.push(helper.availabilityData[3].HoursAvailable);
      //@ts-ignore
      slots = helper.availabilityData[2].Slots.filter(
        (x) => typeof x === "number"
      );
      //@ts-ignore
      isSlotLastChecker = slots.indexOf(+slot) + 1;
      //@ts-ignore
      isIndexLast = slots.indexOf(slots[isSlotLastChecker]);
    } else if (sliderValue == "1" && cellIndex == "4") {
      helper.travelBuffer = 2;
      //@ts-ignore
      availabilityData[4].HoursAvailable.unshift();
      availData.push(helper.availabilityData[4].HoursAvailable);
      //@ts-ignore
      slots = helper.availabilityData[4].Slots.filter(
        (x) => typeof x === "number"
      );

      slots.push(1);
      //@ts-ignore
      isSlotLastChecker = slots.indexOf(+slot) + 1;
      //@ts-ignore
      isIndexLast = slots.indexOf(slots[isSlotLastChecker]);

      //@ts-ignore
    } else if (sliderValue == "1" && cellIndex == "5") {
      if (indexOfSlot == 0 || isIndexLast == -1) {
        helper.travelBuffer = 0;
      } else {
        helper.travelBuffer = 2;
      }
      //@ts-ignore
      availabilityData[5].HoursAvailable.unshift();
      availData.push(helper.availabilityData[5].HoursAvailable);
      //@ts-ignore
      slots = helper.availabilityData[5].Slots.filter(
        (x) => typeof x === "number"
      );
      //@ts-ignore
      isSlotLastChecker = slots.indexOf(+slot) + 1;
      //@ts-ignore
      isIndexLast = slots.indexOf(slots[isSlotLastChecker]);
    } else if (sliderValue == "1" && cellIndex == "6") {
      if (indexOfSlot == 0 || isIndexLast == -1) {
        helper.travelBuffer = 0;
      } else {
        helper.travelBuffer = 2;
      }
      //@ts-ignore
      availabilityData[6].HoursAvailable.unshift();
      availData.push(helper.availabilityData[6].HoursAvailable);
      //@ts-ignore
      slots = helper.availabilityData[6].Slots.filter(
        (x) => typeof x === "number"
      );
      //@ts-ignore
      isSlotLastChecker = slots.indexOf(+slot) + 1;
      //@ts-ignore
      isIndexLast = slots.indexOf(slots[isSlotLastChecker]);
    }
    if (
      //@ts-ignore
      isTimeslotLengthGreatherThanJobLength(
        +slot,
        sliderValue,
        date,
        availData,
        cellIndex,
        innerHTML
      ) == "AVAILABLE" &&
      cellIndex != 0
    ) {
      if (
        helper.sameDateBuffer != 2 &&
        innerHTML == "Available" &&
        innerHTML != "FULL" &&
        innerHTML != "Selected"
      ) {
        if (
          (helper.sameDateBuffer != 2 &&
            indexOfSlot == 0 &&
            innerHTML == "Available" &&
            cellIndex != 0) ||
          (helper.sameDateBuffer != 2 &&
            isIndexLast == -1 &&
            innerHTML == "Available" &&
            cellIndex != 0)
        ) {
          helper.travelBuffer = 0;

          e.target.style.backgroundColor = "#229954";
          e.target.disabled = "true";
          e.target.innerHTML = "Selected";
        } else if (
          isIndexLast != -1 &&
          indexOfSlot != 0 &&
          //@ts-ignore
          helper.jobLength == "1" &&
          cellIndex == "1"
        ) {
          e.target.style.backgroundColor = "#229954";
          e.target.disabled = "true";
          e.target.innerHTML = "Selected";
          document.querySelectorAll(
            //@ts-ignore
            `#data${+cellIndex + indexOfSlot + 2}`
            //@ts-ignore
          )[1].style.backgroundColor = "#229954";
          document.querySelectorAll(
            //@ts-ignore
            `#data${cellIndex + indexOfSlot + 2}`
            //@ts-ignore
          )[1].disabled = "true";
          document.querySelectorAll(
            //@ts-ignore
            `#data${cellIndex + indexOfSlot + 2}`
            //@ts-ignore
          )[1].innerHTML = "Selected";
          document.querySelectorAll(
            //@ts-ignore
            `#data${+cellIndex + indexOfSlot + 1}`
            //@ts-ignore
          )[1].style.backgroundColor = "#229954";
          document.querySelectorAll(
            //@ts-ignore
            `#data${cellIndex + indexOfSlot + 1}`
            //@ts-ignore
          )[1].disabled = "true";
          document.querySelectorAll(
            //@ts-ignore
            `#data${cellIndex + indexOfSlot + 1}`
            //@ts-ignore
          )[1].innerHTML = "Selected";
        } else if (
          isIndexLast != -1 &&
          indexOfSlot != 0 &&
          //@ts-ignore
          helper.jobLength == "1" &&
          // &&
          //@ts-ignore
          cellIndex == "3"
          // isIndexLast != -1 &&
          // cellIndex != 0
        ) {
          e.target.style.backgroundColor = "#229954";
          e.target.disabled = "true";
          e.target.innerHTML = "Selected";
          document.querySelectorAll(
            //@ts-ignore
            `#data${+cellIndex - 2}`
            //@ts-ignore
          )[3].style.backgroundColor = "#229954";
          document
            .querySelectorAll(
              //@ts-ignore
              `#data${cellIndex - 2}`
            )[3]
            .setAttribute("disabled", "true");
          document.querySelectorAll(
            //@ts-ignore
            `#data${cellIndex - 2}`
            //@ts-ignore
          )[3].innerHTML = "Selected";

          document.querySelectorAll(
            //@ts-ignore
            `#data${+cellIndex}`
            //@ts-ignore
          )[3].style.backgroundColor = "#229954";
          document
            .querySelectorAll(
              //@ts-ignore
              `#data${cellIndex}`
            )[3]
            .setAttribute("disabled", "true");
          document.querySelectorAll(
            //@ts-ignore
            `#data${cellIndex}`
            //@ts-ignore
          )[3].innerHTML = "Selected";
        } else if (
          isIndexLast != -1 &&
          indexOfSlot != 0 &&
          //@ts-ignore
          helper.jobLength == "1" &&
          // &&
          //@ts-ignore
          cellIndex == "4"
          // isIndexLast != -1 &&
          // cellIndex != 0
        ) {
          e.target.style.backgroundColor = "#229954";
          e.target.disabled = "true";
          e.target.innerHTML = "Selected";
          document.querySelectorAll(
            //@ts-ignore
            `#data${+cellIndex + 2}`
            //@ts-ignore
          )[4].style.backgroundColor = "#229954";
          document
            .querySelectorAll(
              //@ts-ignore
              `#data${cellIndex + 2}`
            )[4]
            .setAttribute("disabled", "true");
          document.querySelectorAll(
            //@ts-ignore
            `#data${cellIndex + 2}`
            //@ts-ignore
          )[4].innerHTML = "Selected";
          document.querySelectorAll(
            //@ts-ignore
            `#data${+cellIndex}`
            //@ts-ignore
          )[4].style.backgroundColor = "#229954";
          document
            .querySelectorAll(
              //@ts-ignore
              `#data${cellIndex}`
            )[4]
            .setAttribute("disabled", "true");
          document.querySelectorAll(
            //@ts-ignore
            `#data${cellIndex}`
            //@ts-ignore
          )[4].innerHTML = "Selected";
        } else if (
          //@ts-ignore
          isIndexLast != -1 &&
          indexOfSlot != 0 &&
          //@ts-ignore
          helper.jobLength == "1" &&
          //@ts-ignore
          cellIndex == "5"
        ) {
          e.target.style.backgroundColor = "#229954";
          e.target.disabled = "true";
          e.target.innerHTML = "Selected";
          document.querySelectorAll(
            //@ts-ignore
            `#data${+cellIndex + 1}`
            //@ts-ignore
          )[5].style.backgroundColor = "#229954";
          document
            .querySelectorAll(
              //@ts-ignore
              `#data${cellIndex + 1}`
            )[5]
            .setAttribute("disabled", "true");
          document.querySelectorAll(
            //@ts-ignore
            `#data${cellIndex + 1}`
            //@ts-ignore
          )[5].innerHTML = "Selected";
        } else if (
          //@ts-ignore
          helper.jobLength == "1" &&
          //@ts-ignore
          cellIndex == "5"
        ) {
          e.target.style.backgroundColor = "#229954";
          e.target.disabled = "true";
          e.target.innerHTML = "Selected";
        } else if (
          //@ts-ignore
          helper.jobLength == "1" &&
          //@ts-ignore
          cellIndex == "6"
        ) {
          e.target.style.backgroundColor = "#229954";
          e.target.disabled = "true";
          e.target.innerHTML = "Selected";
          document.querySelectorAll(
            //@ts-ignore
            `#data${+cellIndex + indexOfSlot - 2}`
            //@ts-ignore
          )[6].style.backgroundColor = "#229954";
          document
            .querySelectorAll(
              //@ts-ignore
              `#data${cellIndex + indexOfSlot - 2}`
            )[6]
            .setAttribute("disabled", "true");
          document.querySelectorAll(
            //@ts-ignore
            `#data${cellIndex + indexOfSlot - 2}`
            //@ts-ignore
          )[6].innerHTML = "Selected";
          document.querySelectorAll(
            //@ts-ignore
            `#data${+cellIndex - 3}`
            //@ts-ignore
          )[6].style.backgroundColor = "#229954";
          document
            .querySelectorAll(
              //@ts-ignore
              `#data${cellIndex - 3}`
            )[6]
            .setAttribute("disabled", "true");
          document.querySelectorAll(
            //@ts-ignore
            `#data${cellIndex - 3}`
            //@ts-ignore
          )[6].innerHTML = "Selected";
        }
      }
    }
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid col-12 style={_styles.LayoutStyles.flexboxSettings}></Grid>
        <Grid item lg={4} style={_styles.LayoutStyles.slider}>
          <Typography id="discrete-slider" gutterBottom>
            Job Length
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={5}
            id="slider"
            onChange={(e) => {
              handleSlider(e);
            }}
          />
        </Grid>
        <Grid item lg={4} style={_styles.LayoutStyles.slider}>
          <Button
            style={_styles.LayoutStyles.settingsBtn}
            onClick={() => window.location.reload(false)}
            variant="contained"
            color="primary"
          >
            Reset Selections
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12}>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              id="slot-checker-table"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  {helper.dates.map((d, index) => (
                    <TableCell
                      className={classes.cell}
                      style={_styles.LayoutStyles.tableHeader}
                      align="center"
                      //@ts-ignore
                      key={index}
                      id="cell"
                    >
                      {String(new Date(d.date)).slice(0, 10)}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  onClick={(e) => {
                    alertCell(e);
                  }}
                >
                  {availabilityData[1].HoursAvailable.map((t, index) => {
                    return (
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.cell}
                        data-slot={t}
                        key={index}
                        id="data1"
                      >
                        {t}
                      </TableCell>
                    );
                  })}
                </TableRow>
                <TableRow
                  onClick={(e) => {
                    alertCell(e);
                  }}
                >
                  {availabilityData[2].HoursAvailable.map((t, index) => {
                    return (
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.cell}
                        data-slot={t}
                        key={index}
                        id="data2"
                      >
                        {t}
                      </TableCell>
                    );
                  })}
                </TableRow>
                <TableRow
                  onClick={(e) => {
                    alertCell(e);
                  }}
                >
                  {availabilityData[3].HoursAvailable.map((t, index) => {
                    return (
                      <TableCell
                        className={classes.cell}
                        component="th"
                        scope="row"
                        data-slot={t}
                        key={index}
                        id="data3"
                      >
                        {t}
                      </TableCell>
                    );
                  })}
                </TableRow>
                <TableRow
                  onClick={(e) => {
                    alertCell(e);
                  }}
                >
                  {availabilityData[4].HoursAvailable.map((t, index) => {
                    return (
                      <TableCell
                        className={classes.cell}
                        component="th"
                        scope="row"
                        data-slot={t}
                        key={index}
                        id="data4"
                      >
                        {t}
                      </TableCell>
                    );
                  })}
                </TableRow>
                <TableRow
                  onClick={(e) => {
                    alertCell(e);
                  }}
                >
                  {availabilityData[5].HoursAvailable.map((t, index) => {
                    return (
                      <TableCell
                        className={classes.cell}
                        component="th"
                        scope="row"
                        data-slot={t}
                        key={index}
                        id="data5"
                      >
                        {t}
                      </TableCell>
                    );
                  })}
                </TableRow>
                <TableRow
                  onClick={(e) => {
                    alertCell(e);
                  }}
                >
                  {availabilityData[6].HoursAvailable.map((t, index) => {
                    return (
                      <TableCell
                        className={classes.cell}
                        component="th"
                        scope="row"
                        data-slot={t}
                        key={index}
                        id="data6"
                      >
                        {t}
                      </TableCell>
                    );
                  })}
                </TableRow>
                <TableRow
                  onClick={(e) => {
                    alertCell(e);
                  }}
                >
                  {availabilityData[7].HoursAvailable.map((t, index) => {
                    return (
                      <TableCell
                        className={classes.cell}
                        component="th"
                        scope="row"
                        data-slot={t}
                        key={index}
                        id="data7"
                      >
                        {t}
                      </TableCell>
                    );
                  })}
                </TableRow>
                <TableRow
                  onClick={(e) => {
                    alertCell(e);
                  }}
                >
                  {availabilityData[8].HoursAvailable.map((t, index) => {
                    return (
                      <TableCell
                        className={classes.cell}
                        component="th"
                        scope="row"
                        data-slot={t}
                        key={index}
                        id="data8"
                      >
                        {t}
                      </TableCell>
                    );
                  })}
                </TableRow>
                <TableRow
                  onClick={(e) => {
                    alertCell(e);
                  }}
                >
                  {availabilityData[9].HoursAvailable.map((t, index) => {
                    return (
                      <TableCell
                        className={classes.cell}
                        component="th"
                        scope="row"
                        data-slot={t}
                        key={index}
                        id="data9"
                      >
                        {t}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
