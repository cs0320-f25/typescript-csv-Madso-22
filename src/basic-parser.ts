import * as fs from "fs";
import * as readline from "readline";
import { intersection, z, ZodSchema, ZodType } from "zod";

/**
 * This is a JSDoc comment. Similar to JavaDoc, it documents a public-facing
 * function for others to use. Most modern editors will show the comment when 
 * mousing over this function name. Try it in run-parser.ts!
 * 
 * File I/O in TypeScript is "asynchronous", meaning that we can't just
 * read the file and return its contents. You'll learn more about this 
 * in class. For now, just leave the "async" and "await" where they are. 
 * You shouldn't need to alter them.
 * 
 * @param path The path to the file being loaded.
 * @returns a "promise" to produce a 2-d array of cell values
 */

interface ParseError {
  error: 'schema parse'
  arg: Array<string>
}
  
export async function parseCSV<T>(path: string, schema: ZodType<T>): Promise<string[][] | T[] | ParseError | undefined> {
  // This initial block of code reads from a file in Node.js. The "rl"
  // value can be iterated over in a "for" loop. 
  
  const fileStream = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // handle different line endings
  });
  
  
  // Create an empty array to hold the results
  let result = []
  let schemResult = []
  
  // We add the "await" here because file I/O is asynchronous. 
  // We need to force TypeScript to _wait_ for a row before moving on. 
  // More on this in class soon!


  //all values split on comma are pushed onto an array
  for await (const line of rl) {
    const values = line.split(",").map((v) => v.trim());
    result.push(values)
  }
 
  //if the schema is undefined, the original format result (2-D Array) is returned
  if (schema === undefined){
      return result
    }

  //parse is run on each split array in result. If successful, the parsed result will be returned
  for (let i = 0; i < result.length; i++) {
    if (i !== 0) { //ignores first row
      const rowPreParse = schema.safeParse(result[i])
      if (rowPreParse.success) {
        const resSchem = schema.parse(result[i]) 
        schemResult.push(resSchem)
      }
      else{
        return {error: 'schema parse', arg: result[i]}
      }
    }
  }
  return schemResult
  
 

}