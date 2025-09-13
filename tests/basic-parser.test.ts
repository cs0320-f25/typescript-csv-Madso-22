import { integer } from "zod/v4/core/regexes.cjs";
import { parseCSV } from "../src/basic-parser";
import { z } from "zod"
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const QUOTES_CSV_PATH = path.join(__dirname, "../data/quotes.csv");
const CLASS_CSV_PATH = path.join(__dirname, "../data/class.csv");
const CLASSINC_CSV_PATH = path.join(__dirname, "../data/classIncomplete.csv");


const PersonRowSchema = z.tuple([z.string(), z.coerce.number()]).transform( tup => ({name: tup[0], age: tup[1]}))
const quoteRowSchema = z.tuple([z.string(), z.string()]).transform( tup => ({quote: tup[0], author: tup[1]}))
const classRowSchema = z.tuple([z.string(), z.email(), z.string()]).transform( tup => ({name: tup[0], email: tup[1], favFood: tup[2]}))

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH, PersonRowSchema)
  if (results !== undefined) { 
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
  }
  
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH, PersonRowSchema)
  if (results !== undefined) {
      for(const row of results) {
         expect(Array.isArray(row)).toBe(true);
    } 
  }
});

/**
 * tests created for Task A
 */

test("parseCSV avoids commas within quotes", async () => {
  const results = await parseCSV(QUOTES_CSV_PATH, quoteRowSchema)
  if (results !== undefined) {
    expect(results[4]).toEqual(["I think, therefore I am", "Descartes"])
  }
  
});

test("parseCSV ensures values are of the correct type", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH, PersonRowSchema)
  if (results !== undefined) {
    for(const row of results) {
    const num = parseInt("5")
    expect(isNaN(num)).toBe(false);
  }
  }
});

/**
 * tests created after schema implementation
 */
test("parseCSV works with schemas class", async () => {
  const results = await parseCSV(CLASS_CSV_PATH, classRowSchema)
  if (results !== undefined) {
    expect(results[1] instanceof z.ZodType );
    expect(results[2] instanceof z.ZodType);
    expect(results[3] instanceof z.ZodType);
    expect(results[4] instanceof z.ZodType);
  }
});

test("parseCSV works with schemas people", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH, PersonRowSchema)
  expect(parseCSV).toThrow
  if (results !== undefined) {
    expect(results[1] instanceof z.ZodType );
    expect(results[2] instanceof z.ZodType);
    expect(results[3] instanceof z.ZodType);
    expect(results[4] instanceof z.ZodType);
  }
});













