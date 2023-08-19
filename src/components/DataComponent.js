import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './redux/actions';

const DataComponent = ({ data, error, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='weather-data'>
      <h1>Погода сьогодні</h1>
      <ul className='weather-data__list'>
        {data.map((item) => (
          <li key={item.id}>
            <p>Місто: {item.city}</p>
            <p>Температура: {item.temp}</p>
            <p>Тиск: {item.pressure}</p>
            <p>Опис: {item.description}</p>
            <p>Вологість: {item.humidity}</p>
            <p>Швидкість вітру: {item.speed}</p>
            <p>Напрям у градусах: {item.deg}</p>
            </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.data,
  error: state.data.error,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataComponent);
