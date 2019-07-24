import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Results Test", () => {
  let results = [flightNumber,
  departureCity,
  departureTime,
  arrivalCity,
  arrivalTime,
  duration ,
  aircraftType,
  ticketCost]; 
  expected(results).toContain("flightNumber");
});

 
test("Results Test", () => {
const h = Math.floor(minutes / 60);
expect(120).toMatchSnapshot(2);
});

test("Results Test", () => {
const m = minutes % 60;
expect(120).toMatchSnapshot(2)
});

test("Results Test", () => {
const data = someFunctionYouAreTesting()
expect(data).toMatchSnapshot()
});
