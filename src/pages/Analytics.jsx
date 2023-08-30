import React from 'react'

export const Analytics = () => {
  const currentDate = new Date();
  const offdays = [5, 12, 19, 26];
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDate = new Date(currentYear, currentMonth, 1);
  const startDay = startDate.getDay();
  const grid = [];
  for (let i = 0; i < startDay; i++) {
    grid.push(<div key={`empty-${i}`} />);
  }
  let day = 1;
  for (let day = 1; day <= daysInMonth; day++) {
    var shouldcolor;
    for (let rus = 0; rus < offdays.length; rus++) {
      shouldcolor = day == offdays[rus];
      //console.log(day,offdays[rus],shouldcolor)
      if (shouldcolor == true) {
        break;
      }
    }
    console.log(shouldcolor, 'check')
    const className = shouldcolor ? 'calendar-day colored' : 'calendar-day';
    grid.push(
      <div key={`day-${day}`} className={className}>
        {day}
      </div>
    );

  }
  return (
    <div>
        <h2>Current Month: {currentMonth} {daysInMonth}</h2>
        <div>

        </div>
        <div className="calendar-grid"><div>Monday</div>
          <div>Monday</div>
          <div>Monday</div>
          <div>Monday</div>
          <div>Monday</div>
          <div>Monday</div>
          <div>Monday</div>
          {grid}</div>
      </div>
  )
}
