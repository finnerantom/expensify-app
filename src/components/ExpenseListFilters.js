import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    render() {
        return (
            <div>
                <p>
                    <input type="text" value={this.props.filters.text} onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }} />
                    <select
                        value={this.props.filters.sortBy}
                        onChange={(e) => {
                            e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount())
                        }}>
                        <option value="date" >Date</option>
                        <option value="amount" >Amount</option>
                    </select>
                </p>
                <DateRangePicker
                    startDateId="MyStartDatePicker"
                    startDate={this.props.filters.startDate}
                    endDateId="MyEndDatePicker"
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(ExpenseListFilters);