import { integer } from "zod/v4/core/regexes.cjs";
import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const QUOTES_CSV_PATH = path.join(__dirname, "../data/quotes.csv");
const CLASS_CSV_PATH = path.join(__dirname, "../data/class.csv");



test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("parseCSV avoids commas within quotes", async () => {
  const results = await parseCSV(QUOTES_CSV_PATH)

  expect(results[4]).toEqual(["I think, therefore I am", "Descartes"])
});

test("parseCSV ensures values are of the correct type", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    const num = parseInt(row[1])
    expect(isNaN(num)).toBe(false);
  }
});






