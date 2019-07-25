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

test("Price Test", () => {
  const cost = parseFloat(cost)
  expect(6.4578).toMatchSnapshot(6.46)
  });

test('Array should equal DFW, ORD, BOS', () => {
  expect([DFW, ORD, BOS]).toEqual([DFW, ORD, BOS])
})

describe('getSum', () => {
  test('addCosts should return 10 when provided the input 5 and 5', () => {
      expect(getSum(5, 5)).toEqual(10)
  })
})

describe('our site', () => {
  test('is the best', () => {
    expect(ourSite.best).toBeTruthy();
  })
})

test(`returned value not be greater than ${expected}`, () => {
  expect(100 + 200).not.toBeGreaterThan(500);
});

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
