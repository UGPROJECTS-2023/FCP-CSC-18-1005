
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import { addMonths } from 'date-fns'; // Import addMonths from date-fns

const DatePickerField = ({ initialStartDate, initialEndDate, onDateRangeChange, maxFutureMonths = 12 }) => {
  const today = new Date();

  const handleDateRangeChange = (startDate, endDate) => {
    if (onDateRangeChange) {
      onDateRangeChange(startDate, endDate);
    }
  };

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <div className="flex items-center space-x-4">
        <DatePicker
          selected={initialStartDate}
          startDate={initialStartDate}
          endDate={initialEndDate}
          onChange={handleDateRangeChange}
          selectsRange
          startDatePlaceholderText="Start Date"
          endDatePlaceholderText="End Date"
          minDate={today}
          maxDate={addMonths(today, maxFutureMonths)}
          dateFormat="yyyy-MM-dd"
        />
      </div>
    </div>
  );
};

DatePickerField.propTypes = {
  initialStartDate: PropTypes.instanceOf(Date),
  initialEndDate: PropTypes.instanceOf(Date),
  onDateRangeChange: PropTypes.func,
  maxFutureMonths: PropTypes.number,
};

export default DatePickerField;
